<template>
    <div class="post-detail-wrap">
        <article class="left-wrap">
            <div class="content-wrap">
                <header class="article-title">
                    <h1>一个测试标题</h1>
                </header>
                <main class="article-main">
                    <!-- <article-content :html="article.html" /> -->
                    <article-content />
                </main>
                <div class="license-wrap">
                    <span>【END】</span>
                    <!-- <p>本文链接：{{ postLink }}</p> -->
                    <p>本文链接：</p>
                    <p>
                        <span>版权声明：本博客所有文章除声明转载外，均采用</span>
                        <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/deed.zh" target="_blank">BY-NC-SA 3.0</a>
                        <span>许可协议。转载请注明来自</span>
                        <!-- <a :href="website">{{ settings.blogName }}</a>。 -->
                        <!-- <a :href="website">123</a>。 -->
                        <a>123</a>。
                    </p>
                </div>
                <!-- <div class="end-wrap">
                    <span>【END】</span>
                </div> -->
                <div class="article-views">
                    <a-row>
                        <a-col :xs="24" :sm="10" :md="10" :lg="10" style="padding-left: 0;padding-right: 0;">
                            <!-- <p class="info"><span class="author">By / <a>{{article.author}}</a></span><span class="publish-time"> At
                                    time / <a>{{article.createTime | socialDate}}</a></span></p> -->
                            At time
                        </a-col>
                        <a-col :xs="24" :sm="14" :md="14" :lg="14" style="padding-left: 0;padding-right: 0;">
                            <p class="operate_info">
                                <span class="readings"><a>
                                        <!-- <a-icon type="eye"></a-icon> {{article.readNum}} 阅读 -->
                                        <a-icon type="eye"></a-icon> 阅读
                                    </a></span> |
                                <span class="likes">
                                    <!-- <a @click="likePost(article)"> -->
                                    <a>
                                        <!-- <a-icon type="heart"></a-icon> {{article.likeNum}} 喜欢 -->
                                        <a-icon type="heart"></a-icon> 喜欢
                                    </a></span>
                            </p>
                        </a-col>
                    </a-row>
                </div>
            </div>
            <!-- <comment-list v-if="showComments" :from="2" :article-id="article._id" /> -->
        </article>
        <!-- <aside class="side-wrap">
            <div class="side-block-container">
                <div class="side-title">
                    分类
                </div>
                <div class="category-title">
                    <img :src="article.category.img">
                    <span>{{ article.category.cateName }}</span>
                </div>
                <nuxt-link class="ant-btn ant-btn-dashed" :to="`/blog/${article.category.alias}`">
                    全部
                    <span class="posts-count">{{ postsCount }}</span>
                    篇文章
                </nuxt-link>
            </div>
            <div :class="{ 'sticky-wrap': menuShow }">
                <div v-show="menuShow" class="side-block-container">
                    <div class="side-title">
                        目录
                    </div>
                    <a-anchor :affix="false" :show-ink-in-fixed="true" :offset-top="75" :bounds="10">
                        <a-anchor-link v-for="(item1, index1) in menus" :key="index1" :href="item1.href" :title="item1.title">
                            <a-anchor-link v-for="(item2, index2) in item1.subs" :key="index2" :href="item2.href"
                                :title="item2.title" />
                        </a-anchor-link>
                    </a-anchor>
                </div>
                <pop-articles />
            </div>
        </aside> -->
    </div>
</template>
<script>
// import moment from 'moment';
import 'highlight.js/styles/tomorrow.css';
// import CommentList from '@/components/CommentList.vue';
// import PopArticles from '@/components/widgets/popArticles.vue';
import MyActicleMain from '@/components/views/Article/MyArticleMain';
// import { IPost, ISetting } from '@/types/schema';
// import { Context } from '@nuxt/types/index';
export default {
    components: {
        "article-content": MyActicleMain
    }
    //     name: 'PageArticle',
    //     async asyncData({ $axios, params, error }: Context) {
    //         const alias = params.article;
    //         const { code, data: article } = await $axios.$get('/api/article', {
    //             params: {
    //                 alias
    //             }
    //         });
    //         if (code === 1 && article) {
    //             return {
    //                 article
    //             };
    //         } else {
    //             error({
    //                 statusCode: 404,
    //                 message: '未找到该页面'
    //             });
    //         }
    //     },
    //     data() {
    //         return {
    //             settings: this.$store.state.settings as ISetting,
    //             article: {} as IPost,
    //             menus: [] as Array<IHeading2>,
    //             menuShow: false,
    //             postsCount: 0
    //         };
    //     },
    //     computed: {
    //         postLink() {
    //             if (process.client) {
    //                 return (
    //                     location.protocol + '//' + location.host + location.pathname
    //                 );
    //             }
    //             return '';
    //         },
    //         website() {
    //             if (process.client) {
    //                 return location.protocol + '//' + location.host;
    //             }
    //             return '';
    //         },
    //         stickyCls() {
    //             if (this.menuShow) {
    //                 return {
    //                     position: 'sticky',
    //                     top: '90px'
    //                 };
    //             }
    //             return {
    //                 position: 'relative'
    //             };
    //         },
    //         publishDate(): string {
    //             return moment(this.article.publishTime).format('YYYY-MM-DD');
    //         },
    //         showComments(): boolean {
    //             if (this.article.commentsFlag === 1) {
    //                 return true;
    //             }
    //             if (this.article.commentsFlag === -1) {
    //                 return false;
    //             }
    //             return this.settings.enableComments;
    //         }
    //     },
    //     async created() {
    //         const { code, data } = await this.$axios.$get('/api/postsCountByCate', {
    //             params: {
    //                 category: this.article.category._id
    //             }
    //         });
    //         if (code === 1) {
    //             this.postsCount = data;
    //         }
    //     },
    //     mounted() {
    //         this.scrollByHash();
    //         window.addEventListener('hashchange', () => {
    //             this.scrollByHash();
    //         });
    //         this.generateMenu();

    //         // 文章浏览数+1
    //         this.$axios.$put('/api/increaseViews', {
    //             postID: this.article._id
    //         });
    //     },
    //     methods: {
    //         generateMenu() {
    //             const result: Array<IHeading2> = [];
    //             const content = document.querySelector(
    //                 '.article-content'
    //             ) as HTMLElement;
    //             const h2All = content.querySelectorAll('h2');
    //             h2All.forEach(h2 => {
    //                 const anchor = h2.querySelector('a');
    //                 if (anchor) {
    //                     const h2Item: IHeading2 = {
    //                         href: `#${anchor.id}`,
    //                         title: h2.textContent as string,
    //                         subs: []
    //                     };
    //                     let nextEl = h2.nextElementSibling;
    //                     while (nextEl && nextEl.nodeName !== 'H2') {
    //                         if (nextEl.nodeName === 'H3') {
    //                             const anchor = nextEl.querySelector('a');
    //                             if (anchor) {
    //                                 h2Item.subs.push({
    //                                     href: `#${anchor.id}`,
    //                                     title: nextEl.textContent as string
    //                                 });
    //                             }
    //                         }
    //                         nextEl = nextEl.nextElementSibling;
    //                     }
    //                     result.push(h2Item);
    //                 }
    //             });
    //             if (result.length) {
    //                 this.menus = result;
    //                 this.menuShow = true;
    //             }
    //         },
    //         scrollByHash() {
    //             cons                    -';
    //                    decodeURIComponent(location.hash);
    //             if (hash && hash.length > 0) {
    //                 hash = hash.substring(1);
    //             }
    //             if (hash.indexOf(prefix) === 0) {
    //                 history.replaceState(
    //                     null,
    //                     '',
    //                     location.href.replace(/#.*/, '') +
    //                                                         ix, '')
    //                 );
    //             } else {
    //                 const anchor = document.querySelector(`#${prefix}${hash}`);
    //                 if (anchor) {
    //                     window.scrollTo(
    //                         window.scrollX,
    //                         anchor.getBoundingClientRect().top + window.scrollY - 75
    //                     );
    //                 }
    //             }
    //         }
    //     },
    //     head(this: any) {
    //         const article = this.article as IPost;
    //         const content = article.html
    //             .replace(/<[^>]*>/g, '')
    //             .replace(/\r?\n/g, ' ');
    //         const desc =
    //             content.length > 170 ? content.substring(0, 170) + '...' : content;
    //         let keywi aekllb; {i.e  ft   't     
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

.article-content {
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
