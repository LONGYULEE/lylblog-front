<template>
    <div class="showme-wrapper">
        <div class="container">
            <div class="title-wrapper">
                <hr class="title-hr">
                <div class="title-text">
                    <span>关于我</span>
                    <span>ABOUT ME</span>
                </div>
                <hr class="title-hr">
            </div>
            <div class="timeline-wrapper">
                <ul class="timeline-ul">
                    <li class="timeline-li">
                        <div class="timeline-div">
                            <div class="left-box">
                                <p>2019.04 - now</p>
                            </div>
                            <div class="right-box">
                                <p>工作</p>
                                <div class="right-div">
                                    <span>从事JAVA与前端开发。<br>
                                        刚进公司进行JAVA开发，前端人不够，转到前端开发。
                                        <br />
                                        目前主要进行前端开发，平时结合公司项目加上自主学习JAVA知识。
                                    </span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="timeline-li">
                        <div class="timeline-div" style="background:#f2f2f2">
                            <div class="sec-left-box">
                                <p>重庆理工大学</p>
                                <div class="sec-right-div">
                                    <span>电子信息工程专业。
                                        <br />
                                        主修计算机基础，Android程序开发技术，程序设计基础C。
                                        <br />
                                        扩展JAVA自主学习。
                                    </span>
                                </div>
                            </div>
                            <div class="sec-right-box">
                                <p>2015.09 - 2019.07</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="backgroud-div">
            <div class="modal-div">
                <div class="container">
                    <div class="title-wrapper">
                        <hr class="title-hr">
                        <div class="title-text">
                            <span>关于网站</span>
                            <span>ABOUT WEBSITE</span>
                        </div>
                        <hr class="title-hr">
                    </div>
                    <div class="content-wrapper">
                        <p>
                            网站采用前后端分离模式，主要是为了串起所学的知识。整合为一个整体。
                            <br />
                            <br />
                            后端采用
                            <br /><span>SPRINGBOOT</span> + <span>MYBATIS</span>+ <span>MYBATIS-PLUS</span>
                            <br /><span>MYSQL</span> + <span>REDIS</span>+ <span>SHIRO</span>
                            <br />
                            <br />
                            前端采用
                            <br /><span>VUE全家桶</span> + <span>AXIOS</span>+ <span>ELEMENT-UI(后台)</span>
                            <br /><span>Ant Design of Vue(前台)</span>
                            <br />
                            <br />
                            项目搭建在腾讯云服务器上。Mysql 与 Redis 部署在docker容器上。<br />
                            前台部署在 Nginx 上，后台部署在 Tomcat 上。项目集成持续性开发 Jenkins
                            。但由于服务器性能原因，采用手动部署项目。
                            <br />
                            <br />

                        </p>
                        <p class="help">
                            <span>项目借鉴了</span>
                            <br />
                            <a href="https://github.com/llldddbbb/dbblog" target="_blank">dbblog</a>
                            <br />
                            <a href="https://github.com/eshengsky/iBlog" target="_blank">
                                iBlog</a> <br />
                            <a href="https://github.com/LONGYULEE/vue-element-admin" target="_blank">
                                vue-element-admin</a>
                            <br />
                            感谢这些大佬的开源项目
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
}
</script>

<style lang="less" scoped>
@import '../../common/less/theme.less';
.content-box {
    position: relative;
    margin: 10px 30px 15px;
    font-size: 18px;
    display: inline-block;
    color: lightpink;
    font-family: 'Microsoft YaHei', 'Hiragino Sans GB', SimHei, STHeiti;
}
.content-afterorbefore {
    content: '';
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 50px;
    border: 4px solid;
    position: absolute;
    top: calc(50% - 10px);
}
.content-div-box {
    line-height: 2em;
    margin: 0px 30px;
    position: relative;
    padding-bottom: 15px;
    font-size: 13px;
    opacity: 0.79;
    max-width: 520px;
    display: inline-block;
}
.content-div-afterorbefore {
    content: '';
    width: 1px;
    height: 100%;
    display: inline-block;
    border-left: 2px solid;
    position: absolute;
    opacity: 0.2;
}
.showme-wrapper {
    width: 100%;
    min-height: 500px;
    background-color: white;
    padding-top: 70px;
    @media screen and (max-width: 992px) {
        margin-top: -10px;
        margin-bottom: 10px;
    }
    .backgroud-div {
        margin-top: 70px;
        background-image: url(http://img.lylblog.xyz/006yt1Omgy1gdyaq4glp9j31hc0py7nw.jpg);
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        height: 700px;
        @media screen and (max-width: 992px) {
            height: 800px;
        }

        .modal-div {
            background: rgba(0, 0, 0, 0.6);
            height: 100%;
            .title-wrapper {
                padding-top: 40px;
                .title-hr {
                    border: 1px dashed rgba(white, 0.6);
                }
                .title-text {
                    color: rgba(white, 0.8);
                }
            }
        }
    }
    .container {
        margin: 0px 94px;
        padding: 0px 15px;
        max-width: 1200px;
        left: 0;
        right: 0;
        margin: auto;
        @media screen and (max-width: 992px) {
            margin: 0px;
        }

        .title-wrapper {
            min-height: 20px;
            background-color: rgba(0, 0, 0, 0);
            display: flex;
            align-items: center;
            margin: 0px 0px 40px;

            .title-hr {
                flex: 1 1 0%;
                margin: 20px 40px;
                border: 1px dashed rgba(darkgray, 0.6);
                @media screen and (max-width: 992px) {
                    margin: 0px 10px;
                }
            }
            .title-text {
                flex: 0 0 auto;
                text-align: center;
                span {
                    display: block;
                    &:first-child {
                        font-size: 24px;
                        margin: 10px 0px;
                    }
                    &:last-child {
                        line-height: 1.3em;
                        margin: 10px 0px;
                        font-family: courier;
                    }
                }
            }
        }
        .timeline-wrapper {
            padding: 20px 0px;
            .timeline-ul {
                list-style-type: none;
                .timeline-li {
                    min-height: 80px;
                    .timeline-div {
                        display: flex;
                        border-radius: 10px;
                        @media screen and (max-width: 768px) {
                            display: block;
                            position: relative;
                            border-radius: 0px;
                        }
                        &:hover {
                            transform: rotate(0deg) scale(1) translate(0%, 0%);
                            transition: all 0.3s ease;
                            box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 10px 0px;
                        }
                        .left-box {
                            flex: 1 1 0%;
                            width: 100%;
                            @media screen and (max-width: 768px) {
                                position: absolute;
                            }
                            p {
                                font-family: georgia;
                                text-align: right;
                                margin: 10px 30px 10px 30px;
                                font-weight: normal;
                                font-size: 18px;
                                @media screen and (max-width: 768px) {
                                    margin-right: 10px;
                                }
                            }
                        }
                        .right-box {
                            flex: 1 !important;
                            p {
                                .content-box();
                                @media screen and (max-width: 768px) {
                                    margin-left: 10px;
                                }
                                &::before {
                                    .content-afterorbefore();
                                    left: -40px;
                                    @media screen and (max-width: 768px) {
                                        content: none;
                                    }
                                }
                            }
                            .right-div {
                                span {
                                    .content-div-box();
                                    @media screen and (max-width: 768px) {
                                        margin-left: 10px;
                                    }
                                    &::before {
                                        .content-div-afterorbefore();
                                        left: -31px;
                                        @media screen and (max-width: 768px) {
                                            content: none;
                                        }
                                    }
                                }
                            }
                        }
                        .sec-left-box {
                            flex: 1 1 0%;
                            text-align: right;
                            p {
                                .content-box();
                                @media screen and (max-width: 768px) {
                                    margin-right: 10px;
                                }
                                &::before {
                                    .content-afterorbefore();
                                    right: -40px;
                                    @media screen and (max-width: 768px) {
                                        content: none;
                                    }
                                }
                            }
                            .sec-right-div {
                                span {
                                    .content-div-box();
                                    @media screen and (max-width: 768px) {
                                        margin-right: 10px;
                                    }
                                    &::before {
                                        .content-div-afterorbefore();
                                        right: -31px;
                                        @media screen and (max-width: 768px) {
                                            content: none;
                                        }
                                    }
                                }
                            }
                        }
                        .sec-right-box {
                            flex: 1 !important;
                            @media screen and (max-width: 768px) {
                                position: absolute;
                                top: 0;
                            }
                            p {
                                font-family: Georgia, 'Times New Roman', Times,
                                    serif;
                                margin: 10px 30px 10px 30px;
                                font-weight: 300;
                                font-size: 18px;
                                @media screen and (max-width: 768px) {
                                    margin-left: 10px;
                                }
                            }
                        }
                    }
                }
            }
        }

        .content-wrapper {
            color: rgba(255, 255, 255, 0.8);
            text-indent: 25px;
            line-height: 1.8em;
            text-align: center;
            span {
                background-color: rgba(255, 182, 193, 0.8);
                padding: 2px 4px;
                margin: 0px 2px;
                color: white;
                border-radius: 5px;
            }
            .help {
                margin-top: 30px;
                span {
                    font-size: 18px;
                    color: rgba(255, 255, 255, 0.8);
                    background: none;
                    margin-left: -40px;
                }
                a {
                    font-size: 16px;
                    margin: 0px 20px 20px 0px;
                }
            }
        }
    }
}
</style>