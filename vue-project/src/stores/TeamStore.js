import { defineStore } from "pinia";

export let useTeamStore= defineStore('team',{
    state: () => ({
        name:'',
        spots:0,
        members: []        
    }),

    actions: {
        //fill() {
            async fill() {
            let r=  await import ('@/team.json')

            /*import ('@/team.json').then(r => {
                let data =r.default;*/
                
                /*this.name = data.name;
                this.spots = data.spots;
                this.members = data.members;*/
                
                
                /*this.$patch({
                    name: data.name,
                    spots: data.spots,
                    members: data.members
                });*/

                this.$state = r.default;
            
        },

        grow (spots) {
            this.spots = spots;
        }

    },

    getters: {
        spotsRemaining(){
            return this.spots - this.members.length;
        }
    }
});


