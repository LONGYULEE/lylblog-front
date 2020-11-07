<template>
    <div>
        <ul id="menu" class="mfb-component--br mfb-slidein-spring" data-mfb-toggle="hover">
            <li class="mfb-component__wrap">
                <a href="#" class="mfb-component__button--main">
                    <i class="mfb-component__main-icon--resting ion-plus-round">
                        <a-icon type="plus" />
                    </i>
                    <i class="mfb-component__main-icon--active ion-close-round">
                        <a-icon type="close" />
                    </i>
                </a>
                <ul class="mfb-component__list">

                    <li>
                        <a href="#" data-mfb-label="Top" class="mfb-component__button--child">
                            <i class="mfb-component__child-icon ion-social-octocat">
                                <a-icon type="up" />
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href="#" data-mfb-label="Github" class="mfb-component__button--child">
                            <i class="mfb-component__child-icon ion-social-github">
                                <a-icon type="github" />
                            </i>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>
@import '../../common/less/mfb.css';
</style>