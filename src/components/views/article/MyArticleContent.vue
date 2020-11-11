<template>
    <div class="post-detail-wrap">
        <article class="left-wrap">
            <div class="content-wrap">
                <header class="article-title">
                    <h1>{{article.title}}</h1>
                </header>
                <main class="article-main">
                    <article-content id="article-main-page" :html="article.contentFormat" ref="article" />
                </main>
                <!-- <div class="license-wrap">
                    <span>【END】</span>
                    <p>本文链接：{{ postLink }}</p>
                    <p>本文链接：</p>
                    <p>
                        <span>版权声明：本博客所有文章除声明转载外，均采用</span>
                        <a href="" target="_blank">BY-NC-SA 3.0</a>
                        <span>许可协议。转载请注明来自</span>
                        <a :href="website">{{ settings.blogName }}</a>。
                        <a :href="website">123</a>。
                        <a>123</a>。
                    </p>
                </div> -->

                <a-divider class="divider">[ END ]</a-divider>
                <div class="info-class">
                    <div class="category-class">
                        <span>所属分类：</span>
                        <router-link to="" v-for="(item,index) in categoryArr" @click.native="toCategory(item.id)"
                            :key="item.id">{{item.name}}
                            <a-divider type="vertical" v-if="(index + 1) != categoryArr.length" />
                        </router-link>
                    </div>
                    <div class="tags-class" v-if="tags.length != 0">
                        <span>标签：</span>
                        <a-tag :color="index | mapTagColor" v-for="(tag, index) in tags" :key="index">{{tag.name}}
                        </a-tag>
                    </div>
                </div>
                <div class="article-views">
                    <a-row>
                        <a-col :xs="24" :sm="12" :md="12" :lg="12" style="padding-left: 0;padding-right: 0;">
                            <p class="info">
                                <span class="author">By / <a>{{article.author}}</a>
                                </span>
                                <span>&nbsp;&nbsp;&nbsp;</span>
                                <span class="publish-time">
                                    At time / <a>{{article.createTime | socialDate}}</a>
                                </span>
                            </p>
                        </a-col>
                        <a-col :xs="24" :sm="12" :md="12" :lg="12" style="padding-left: 0;padding-right: 0;">
                            <p class="operate_info">
                                <span class="readings"><a>
                                        <a-icon type="eye"></a-icon> {{article.readNum}} 阅读
                                    </a></span> |
                                <span class="likes">
                                    <a @click="likePost(article)">
                                        <a-icon type="heart"></a-icon> {{article.likeNum}} 喜欢
                                    </a></span>
                            </p>
                        </a-col>
                    </a-row>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
import MyActicleMain from '@/components/views/Article/MyArticleMain';
import { mixin } from "@/util";
import Viewer from 'viewerjs';
import clipboard from 'clipboard'
import 'viewerjs/dist/viewer.css';
const highlightCode = () => {
    const preEl = document.querySelectorAll('pre')
    preEl.forEach((el) => {
        hljs.highlightBlock(el)
    })

    let blocks = document.querySelectorAll('code')
    blocks.forEach((block) => {
        hljs.lineNumbersBlock(block)
    })
}
export default {
    components: {
        "article-content": MyActicleMain
    },
    mixins: [mixin],
    data() {
        return {
            article: {},
            menus: [],
            toc: null,
            category: [],
            categoryArr: [],
            tags: []
        };
    },
    methods: {
        getArticle(articleId) {
            this.$http({
                url: this.$http.adornUrl('/article/' + articleId),
                method: 'get'
            }).then(({ data }) => {
                if (data && data.code === 2000) {
                    this.article = data.data
                    if (data.data.categoryId) {
                        this.category = data.data.categoryId.split(',');
                    }
                    this.tags = data.data.tagList;

                    // 更新目录、高亮代码
                    this.$nextTick(function () {
                        this.changeTitle();
                        //代码框添加代码类型显示
                        let preEl = document.querySelectorAll('pre');
                        this.createCodeHeader(preEl);

                        //文章页面网页 title
                        document.title = this.article.title + ' - 寒露';
                        this.setViewer();
                        this.createToc();
                    })
                    // this.getCategroyName();
                    //占位取消
                    this.$emit('getMenus', true);
                }
            })
        },
        //为图片添加点击事件
        setViewer() {
            const imgDom = document.getElementsByTagName('img');
            let viewWidth = document.body.offsetWidth;
            for (let i = 0; i < imgDom.length; i++) {
                imgDom[i].parentNode.setAttribute('class', 'img-wrapper');
                if (viewWidth < 768) {
                    new Viewer(imgDom[i], {
                        navbar: false,
                        toolbar: false,
                        title: false
                    });
                } else {
                    new Viewer(imgDom[i], {
                        navbar: false,
                    });
                }
            }
        },
        //点赞
        likePost(post) {
            this.$http({
                url: this.$http.adornUrl("/article/like/" + post.id),
                method: "put",
                data: this.$http.adornData()
            }).then(({ data }) => {
                if (data && data.code === 2000) {
                    post.likeNum += 1;
                    this.$message.success("点赞成功");
                }
            }).catch(error => {
                console.log(error);
            });
        },
        getUpCaseClass(data) {
            var str = '';
            if (data.length != 0) {
                str = data[0].getAttribute('class').substring(5);
            }
            return str.toUpperCase();
        },
        //创建代码框头部显示
        createCodeHeader(data) {
            data.forEach((item, index) => {
                let str = this.getUpCaseClass(item.getElementsByTagName('code'));
                //创建一个节点
                var tmp = document.createElement('div');
                //向节点中写入需要添加的内容
                tmp.innerHTML = '<div class="pre-header">' +
                    '<div class="pre-header-left"><div></div><div></div><div></div></div>' +
                    `<div class="pre-header-right">${str}</div>` +
                    `<div class="copyCode" id="pre-header-end` + index + `" onclick="copyCode(` + index + `)"></div>` +
                    `</div>`;
                //加新节点插入到指定位置
                item.insertBefore(tmp, item.childNodes[0]);
                //初始化复制插件
                new clipboard('.copyCode');
            })
        },
        copyCode(index) {
            //复制代码按钮
            let codeDom = document.getElementById('pre-header-end' + index);
            //代码html
            let codeLine = codeDom.parentNode.parentNode.nextElementSibling.getElementsByClassName('hljs-ln-code');
            let codeArr = [];
            for (let i = 0; i < codeLine.length; i++) {
                //去除字符串中的html标签
                codeArr.push(codeLine[i].innerHTML.replace(/<.*?>/ig, ''));
            }
            //还原代码，复制到剪贴板中
            let codestr = codeArr.join('\n');
            codeDom.setAttribute('data-clipboard-text', codestr);
            this.$message.success("复制成功");

        },
        //创建目录
        createMenus() {
            this.$store.commit('setMenus', false);
        },
        getCategroyName() {
            this.$http({
                url: this.$http.adornUrl("/operation/categories?type=0"),
                method: "get",
                data: this.$http.adornData()
            }).then(({ data }) => {
                if (data && data.code === 2000) {
                    let categoryArr = data.data;
                    this.category.forEach((item01, index01) => {
                        categoryArr.forEach((item02, index02) => {
                            if (item01 == item02.id) {
                                this.categoryArr.push({
                                    'id': item02.id,
                                    'name': item02.name
                                })
                            }
                        })
                    })
                }
            }).catch(error => {
                console.log(error);
            });
        },
        toCategory(id) {
            this.$router.push({
                path: '/articles', query: { categoryId: id }
            })
        },
        createToc() {

            if (navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {
                let h2El = document.querySelectorAll('h2');

                //h2
                h2El.forEach(item => {
                    let aEl = item.getElementsByTagName('a');
                    const result = {
                        href: '#' + aEl[0].getAttribute('id'),
                        title: item.innerHTML.substring(item.innerHTML.lastIndexOf('>') + 1),
                        children: []
                    };
                    let nextEl = item.nextElementSibling;
                    while (nextEl && nextEl.nodeName !== 'H2') {
                        if (nextEl.nodeName === 'H4') {
                            let anchor = nextEl.querySelector('a');
                            if (anchor) {
                                let l = result.children.length;
                                result.children[l - 1].children.push({
                                    href: `#${anchor.id}`,
                                    title: nextEl.textContent,
                                })
                            }
                        } else if (nextEl.nodeName === 'H3') {
                            const anchor = nextEl.querySelector('a');
                            if (anchor) {
                                result.children.push({
                                    href: `#${anchor.id}`,
                                    title: nextEl.textContent,
                                    children: []
                                });
                            }
                        }
                        nextEl = nextEl.nextElementSibling;
                    }
                    this.menus.push(result)
                })
                this.$store.commit('setMenus', this.menus);
            } else {
                tocbot.init({
                    tocSelector: '.js-toc',
                    contentSelector: '.content-wrap',
                    headingSelector: 'h2, h3, h4',
                    positionFixedSelector: '.js-toc',
                    scrollSmooth: true,
                    scrollSmoothDuration: 1000,
                    scrollSmoothOffset: -80,
                    headingsOffset: 1,
                    throttleTimeout: 100,
                });
            }
        },
        changeTitle() {
            var i = 0;
            let titleEL = document.querySelectorAll('h2,h3,h4,h5');
            titleEL.forEach((item, index) => {
                item.setAttribute('id', 'title-id-' + i++);
            })
        }
    },
    created: function () {
        this.getArticle(this.$route.params.articleId);
        let self = this;
        window.copyCode = self.copyCode;
    },
    mounted() {
        highlightCode();
    },
    updated() {
        highlightCode()
    },
    beforeDestroy() {
        this.$store.commit('setMenus', []);
        tocbot.destroy();
    }
};
</script>

<style lang="less" scoped>
@import '../../../common/less/theme.less';
.operate_info {
    text-align: right;
    font-size: 14px;
}

.info-class {
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 992px) {
        display: flex;
        justify-content: center;
    }
    .category-class {
        span {
            font-weight: bold;
            color: @my-dark-font-color;
        }
        a {
            color: #2799ff;
            cursor: pointer;

            &:hover {
                color: @color-typegraphy-title-hover;
                text-decoration: underline;
            }
        }
    }

    .tags-class {
        @media only screen and (max-width: 992px) {
            display: none;
        }
        span {
            font-weight: bold;
            &:first-child {
                color: @my-dark-font-color;
            }
        }
        a {
            color: #2799ff;
            cursor: pointer;

            &:hover {
                color: @color-typegraphy-title-hover;
                text-decoration: underline;
            }
        }
    }
}

@media only screen and (max-width: 768px) {
    .operate_info {
        text-align: center;
        margin-top: 10px;
    }
    .info {
        text-align: center;
    }
}
.operate_info span {
    margin-right: 10px;
}
.operate_info span + span {
    margin-left: 10px;
}
.operate_info span a {
    cursor: pointer;
}
.operate_info span a:hover {
    color: #409eff;
    text-decoration: underline;
}

.post-detail-wrap {
    display: flex;
    justify-content: center;
    /* margin-top: 30px; */
    background-color: @default-background-color;
    border-radius: @default-border-radius;
}

.left-wrap {
    width: 100%;
}

.content-wrap {
    background: @default-background-color;
    border-radius: 10px;
    padding: 30px;
    min-height: 50vh;
    font-size: 16px;
    width: 100%;
    .divider {
        color: @my-font-color;
        margin: 60px 0;
    }
}

.article-title {
    margin: 40px 0 100px;
    text-align: center;
}

.article-title span {
    color: #777;
}

.article-title h1 {
    font-size: 3em;
    color: #fff;
    font-weight: 500;
}

.myarticle-content {
    min-height: 60vh;
}

.side-wrap {
    width: 260px;
    flex: none;
    margin-left: 20px;
}

.side-block-container {
    background: #fff;
    padding: 20px;
    border-radius: 4px;
    margin-bottom: 20px;
}

.side-title {
    font-size: 16px;
    margin-bottom: 8px;
    user-select: none;
}

.side-wrap .category-title {
    border-top: 1px solid transparent;
    font-size: 15px;
    height: 50px;
    position: relative;
    display: flex;
    align-items: center;
    color: #444;
}

.side-wrap .category-title img {
    width: 25px;
    height: 25px;
    position: absolute;
}

.side-wrap .category-title span {
    padding-left: 28px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
}

.ant-anchor-ink::before {
    width: 3px;
    background-color: #eee;
}

.license-wrap {
    position: relative;
    border: 1px dashed #ccc;
    border-radius: 5px;
    padding: 13px 16px 8px;
    margin: 50px 0 20px;
    font-size: 14px;
}

.license-wrap > span {
    position: absolute;
    left: 50%;
    top: -12px;
    transform: translate(-50%, 0);
    display: block;
    background: #fff;
    font-weight: 500;
    user-select: none;
}

.license-wrap > p {
    margin-bottom: 5px;
}

.sticky-wrap {
    position: sticky;
    top: 90px;
}

.article-views {
    color: #666;
    font-size: 14px;
    margin-top: 20px;
    .publish-time {
        color: @my-dark-font-color;
    }
    .author {
        color: @my-dark-font-color;
    }
}

.article-views .split-line {
    position: relative;
    top: -1px;
    color: #aaa;
}

@media (max-width: 890px) {
    .side-wrap {
        display: none;
    }
}

@media (max-width: 576px) {
    .post-detail-wrap {
        margin-top: 15px;
    }

    .content-wrap {
        padding: 15px;
    }
}
</style>
