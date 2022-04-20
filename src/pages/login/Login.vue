<template>
    {{ msg }}
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
    setup() {
        const msg = "this is message from '/pages/login/Logsin.vue'"
        return {
            msg
        }
    }
})
</script>