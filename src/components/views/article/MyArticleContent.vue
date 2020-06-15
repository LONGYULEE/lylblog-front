<template>
    <div class="post-detail-wrap">
        <article class="left-wrap">
            <div class="content-wrap">
                <header class="article-title">
                    <h1>{{article.title}}</h1>
                </header>
                <main class="article-main">
                    <article-content :html="article.contentFormat" ref="article" />
                </main>
                <!-- <div class="license-wrap">
                    <span>【END】</span>
                    <p>本文链接：{{ postLink }}</p>
                    <p>本文链接：</p>
                    <p>
                        <span>版权声明：本博客所有文章除声明转载外，均采用</span>
                        <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/deed.zh" target="_blank">BY-NC-SA 3.0</a>
                        <span>许可协议。转载请注明来自</span>
                        <a :href="website">{{ settings.blogName }}</a>。
                        <a :href="website">123</a>。
                        <a>123</a>。
                    </p>
                </div> -->
                <div class="end-wrap">
                    <span>【END】</span>
                </div>
                <div class="article-views">
                    <a-row>
                        <a-col :xs="24" :sm="10" :md="10" :lg="10" style="padding-left: 0;padding-right: 0;">
                            <p class="info">
                                <span class="author">By / <a>{{article.author}}</a>
                                </span>
                                <span>&nbsp;&nbsp;&nbsp;</span>
                                <span class="publish-time">
                                    At time / <a>{{article.createTime | socialDate}}</a>
                                </span>
                            </p>
                        </a-col>
                        <a-col :xs="24" :sm="14" :md="14" :lg="14" style="padding-left: 0;padding-right: 0;">
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
import hljs from 'highlight.js'
import 'highlight.js/styles/tomorrow.css';
import MyActicleMain from '@/components/views/Article/MyArticleMain';
import { mixin } from "@/util";
const highlightCode = () => {
    const preEl = document.querySelectorAll('pre')
    preEl.forEach((el) => {
        hljs.highlightBlock(el)
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
            menus: []
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

                    // 更新目录、高亮代码
                    this.$nextTick(function () {

                        //代码框添加代码类型显示
                        let preEl = document.querySelectorAll('pre');
                        let h2El = document.querySelectorAll('h2');
                        this.changeData(h2El);
                        preEl.forEach(item => {

                            let str = this.getUpCaseClass(item.childNodes);
                            // this.getUpCaseClass(item.childNodes)
                            //创建一个节点
                            var tmp = document.createElement('div');
                            //向节点中写入需要添加的内容
                            tmp.innerHTML = '<div class="pre-header">' +
                                '<div class="pre-header-left"><div></div><div></div><div></div></div>' +
                                `<div class="pre-header-right">${str}</div></div>`;
                            //加新节点插入到指定位置
                            item.insertBefore(tmp, item.childNodes[0]);
                        })
                        document.title = this.article.title + ' - 寒露';
                    })
                }
            })
        },
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
            data.forEach(item => {
                str = item.className.substring(5);
            })
            return str.toUpperCase();
        },
        changeData(data) {
            //h2
            data.forEach(item => {
                console.log(item)
                let aEl = item.getElementsByTagName('a')

                this.menus.push({
                    href: '#' + aEl[0].getAttribute('id'),
                    title: item.innerHTML.substring(item.innerHTML.lastIndexOf('>') + 1)
                })
            })
            this.$emit('getMenus', this.menus);
        }
    },
    created: function () {
        this.getArticle(this.$route.params.articleId)
    },
    mounted() {
        highlightCode();
    },
    updated() {
        highlightCode()
    }
};
</script>

<style scoped>
.operate_info {
    text-align: right;
    font-size: 14px;
}
@media only screen and (max-width: 768px) {
    .operate_info {
        text-align: left;
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
    background-color: white;
    border-radius: 10px;
}

.left-wrap {
    width: 100%;
}

.content-wrap {
    background: #fff;
    border-radius: 10px;
    padding: 30px;
    min-height: 50vh;
    font-size: 16px;
    width: 100%;
}

.article-title {
    margin: 40px 0 100px;
    text-align: center;
}

.article-title span {
    color: #777;
}

.article-title h1 {
    font-size: 2em;
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

.license-wrap > span,
.end-wrap span {
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

.end-wrap {
    position: relative;
    border-top: 1px solid #ddd;
    margin: 40px 0 70px;
}

.sticky-wrap {
    position: sticky;
    top: 90px;
}

.article-views {
    color: #666;
    font-size: 14px;
    margin-top: 20px;
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
