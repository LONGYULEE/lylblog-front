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
                                <p>2019.04 - 至今</p>
                            </div>
                            <div class="right-box">
                                <p>绿水曲</p>
                                <div class="right-div">
                                    <span>渌水明秋月，南湖采白蘋。<br>
                                        荷花娇欲语，愁杀荡舟人。</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="timeline-li">
                        <div class="timeline-div" style="background:#f2f2f2">
                            <div class="sec-left-box">
                                <p>重庆理工大学</p>
                                <div class="sec-right-div">
                                    <span>渌水明秋月，南湖采白蘋。<br>
                                        荷花娇欲语，愁杀荡舟人。</span>
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
        height: 500px;
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
                        &:hover {
                            transform: rotate(0deg) scale(1) translate(0%, 0%);
                            transition: all 0.3s ease;
                            box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 10px 0px;
                        }
                        .left-box {
                            flex: 1 1 0%;
                            width: 100%;
                            p {
                                font-family: georgia;
                                text-align: right;
                                margin: 10px 30px 10px 30px;
                                font-weight: normal;
                                font-size: 18px;
                            }
                        }
                        .right-box {
                            flex: 1 !important;
                            p {
                                .content-box();
                                &::before {
                                    .content-afterorbefore();
                                    left: -40px;
                                }
                            }
                            .right-div {
                                span {
                                    .content-div-box();
                                    &::before {
                                        .content-div-afterorbefore();
                                        left: -31px;
                                    }
                                }
                            }
                        }
                        .sec-left-box {
                            flex: 1 1 0%;
                            text-align: right;
                            p {
                                .content-box();
                                &::before {
                                    .content-afterorbefore();
                                    right: -40px;
                                }
                            }
                            .sec-right-div {
                                span {
                                    .content-div-box();
                                    &::before {
                                        .content-div-afterorbefore();
                                        right: -31px;
                                    }
                                }
                            }
                        }
                        .sec-right-box {
                            flex: 1 !important;
                            p {
                                font-family: Georgia, 'Times New Roman', Times, serif;
                                margin: 10px 30px 10px 30px;
                                font-weight: 300;
                                font-size: 21px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>