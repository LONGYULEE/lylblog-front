<template>
    <div class="timeline-header">
        <section-title :mainTitle="'存档时光'" :subTitle="'Articles'">
        </section-title>
    </div>
</template>

<script type="text/ecmascript-6">
import SectionTitle from '@/components/views/Section/SectionTitle'

export default {
    components: {
        'section-title': SectionTitle,
    }
}
</script>
