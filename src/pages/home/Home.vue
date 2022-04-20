<template>
    This is home page. <br/>
    {{num}} <br/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    setup() {
        const num: string | number = 1
        return {
            num
        }
    }
})
</script>