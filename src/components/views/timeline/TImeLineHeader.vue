<template>
    <div class="timeline-header">
        <section-title :mainTitle="'TIMELINE'" :subTitle="'时间轴'">
        </section-title>
    </div>
</template>

<script>
import SectionTitle from '@/components/views/Section/SectionTitle'

export default {
    components: {
        'section-title': SectionTitle,
    }
}
</script>
