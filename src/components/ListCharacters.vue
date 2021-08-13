<template>
    <section>
        <div class="characters">
            <div class="characters__item">
                <h2>Characters</h2>
            </div>
        </div>
    </section>
</template>

<script>
import { onMounted } from 'vue'
    import { useStore } from 'vuex'
export default {
    setup(){
        const store= useStore()     //esto es para acceder al store y acceder a las actions

        onMounted(()=> {
            store.dispatch('getCharacters')    //esto es para acceder a las accions, en caso que quiera acceder a kos state es store.state
        })
    }
}
</script>

<style>

</style>