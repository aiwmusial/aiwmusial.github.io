// import { technologies } from "./technologies.js"
const app = Vue.createApp({
    data() {
        return {
            technologies: technologies
        };
    },

    template: ` <div 
                    v-for="tech in technologies"
                    :key="tech.id"
                    class="mb-3 col-lg-2 col-6 d-flex align-items-center justify-content-center"
                >
                    <div 
                        class="card"
                    >
                        <div class="card-header text-center align-middle">
                            {{ tech.description }}
                        </div>
                        <img 
                            class="img-fluid p-2 ms-auto me-auto" 
                            :src="tech.source" 
                            :alt="tech.alt"
                        >
                    </div>
                </div>`
}).mount("#skillsAndTech");