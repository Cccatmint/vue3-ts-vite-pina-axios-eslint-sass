<template>
    <h3>test pinia</h3>
    counter: {{ counter }} <br/>
    name: {{name}}<br/>
    isAdmin: {{ isAdmin }}<br/>
    getter: nameLength: {{ nameLength }} <br/>
    <button @click="updateName">update name</button>
    <button @click="increment">pinia action : increment</button>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import { storeToRefs } from 'pinia'
    import { useMainStore } from '@/store/main'
    export default defineComponent({
        setup() {
            const mainStore = useMainStore()
            const { counter, name, isAdmin, nameLength } = storeToRefs(mainStore)

            const updateName = () => {
                mainStore.$patch({
                    name: 'changed name.'
                })
            }

            const increment = () => {
                // store - action
                mainStore.increment()
            }

            return {
                counter, name, isAdmin, nameLength,
                updateName, increment
            }
        }
    })
</script>