const proj = Vue.createApp({
    data() {
        return {
            projects: projects
        };
    },

    template: ` <div 
                    v-for="project in projects" 
                    :key="project.id"
                    class="col-12 col-sm-6 col-md-4 d-flex justify-content-center mt-3 mb-3"
                >
                    <div class="card" style="width: 78%;">
                    <img :src="project.source" class="card-img-top ms-auto me-auto" :alt="project.alt">
                    <div class="card-body">
                        <h5 class="card-title text-dark">
                            {{ project.title }}
                        </h5>
                        <p class="card-text text-dark">
                            {{ project.description }}  
                        </p>
                        <a :href="project.projectLink" target="_blank" class="btn btn-dark">Go to app</a>
                    </div>
                    </div>
                </div>`
}).mount("#projectsCards");