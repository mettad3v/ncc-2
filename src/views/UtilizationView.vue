<template>
    <PerformanceBlock @modalStateChange="modalStateChange" :isModalOpen="isModalOpen"
        :predictionResults="predictionResults" />

    <div class="md:mx-20 md:mt-20 mt-10">
        <section class="md:flex text-center md:flex-col md:justify-center md:items-center">

            <h1
                class="leading-8 font-normal text-lg md:text-4xl md:font-bold md:leading-[67px] text-black md:text-[#4F4F4F]  ">
                Model Utilization Estimation</h1>
            <p class="font-['Soleil'] text-[#828282]  text-sm md:text-xl leading-8 mt-3 md:mt-0">Kindly fill the form below
                to use the
                model</p>
            <p class="text-xs font-['Soleil']">*Telcos can be de-selected from the process by clicking on them </p>
            <p class="text-xs mt-1 font-['Soleil']">* All fields are required</p>
        </section>

        <section class="mt-8">
            <ul class="list-none flex justify-center items-center cursor-pointer">

                <li @click="toggleTelco('mtn')"
                    class="text-xs bg-mtn w-20 text-center font-bold font-['Soleil'] border  rounded-r-sm p-2 "
                    :class="{ 'bg-transparent border-[#9B57D6] font-normal text-black': mtnState, 'border-mtn': !mtnState }">
                    MTN
                </li>
                <li @click="toggleTelco('airtel')"
                    class="text-xs w-20 text-center font-['Soleil'] font-bold bg-airtel border hover:font-normal border-r-0  p-2 "
                    :class="{ 'bg-transparent border-[#9B57D6] font-normal text-black': airtelState, 'border-airtel text-white': !airtelState }">
                    AIRTEL</li>
                <li @click="toggleTelco('glo')"
                    class="text-xs w-20 text-center font-['Soleil'] font-bold bg-glo hover:font-normal border border-r-0  p-2 "
                    :class="{ 'bg-transparent border-[#9B57D6] font-normal text-black': gloState, 'border-glo text-white': !gloState }">
                    GLO
                </li>
                <li @click="toggleTelco('etisalat')"
                    class="text-xs w-20 text-center font-['Soleil'] font-bold bg-etisalat  border hover:border-[#9B57D6] rounded-r-sm p-2"
                    :class="{ 'bg-transparent border-[#9B57D6] font-normal text-black': etisalatState, 'border-etisalat text-white': !etisalatState }">
                    ETISALAT</li>
            </ul>


        </section>

        <section class="flex justify-center items-center font-['Soleil'] mt-2 mb-20">
            <form @submit.prevent="predict" class="w-full" action="">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <input required v-model="formData.commons.Longitude" class="bg-[#F1F6FD] h-12 p-3 rounded" type="number"
                        step="any" placeholder="Longitude">
                    <input required v-model="formData.commons.Latitude" class="bg-[#F1F6FD] h-12 p-3 rounded" type="number"
                        step="any" placeholder="Latitude">
                    <input required v-model="formData.commons.minutes" class="bg-[#F1F6FD] h-12 p-3 rounded" type="number"
                        step="any" placeholder="Minutes">
                    <input required v-model="formData.commons.seconds" class="bg-[#F1F6FD] h-12 p-3 rounded" type="number"
                        step="any" placeholder="Seconds">
                </div>
                <!-- ---MTN--- -->

                <section class="mt-2  border-t border-mtn w-full " :class="{ hidden: mtnState }">
                    <div class="bg-mtn w-8 h-4">
                        <span class="text-xs flex items-center justify-center">mtn</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-2 p-3">
                        <select v-model="formData.mtn.ServingCellIdentity" class="bg-[#F1F6FD] h-12 p-3 rounded"
                            name="ServingCellId" id="">
                            <option disabled selected value="">serving cell identity</option>
                            <option v-for="(item, index) in mtnData.servingCellIdentity" :key="index" :value="item">
                                {{ item }}
                            </option>
                        </select>
                        <select v-model="formData.mtn.CellName" class="bg-[#F1F6FD] h-12 p-3 rounded" name="cellname" id="">
                            <option disabled selected value="">cell name</option>
                            <option v-for="(item, index) in mtnData.cellName" :key="index" :value="item">{{ item }}
                            </option>
                        </select>
                        <select v-model="formData.mtn.SiteName" class="bg-[#F1F6FD] h-12 p-3 rounded" name="sitename" id="">
                            <option disabled selected value="">site name</option>
                            <option v-for="(item, index) in mtnData.siteName" :key="index" :value="item">{{ item }}
                            </option>
                        </select>
                        <input type="number" v-model="formData.mtn.RSSINRdB" class="bg-[#F1F6FD] h-12 p-3 rounded"
                            placeholder="RSSINRdB">
                        <input v-model="formData.mtn.ServingCellRSRQdB" class="bg-[#F1F6FD] h-12 p-3 rounded" type="number"
                            step="any" placeholder="ServingCellRSRQdB">
                        <input v-model="formData.mtn.ServingCellRSRPdBm" class="bg-[#F1F6FD] h-12 p-3 rounded" type="number"
                            step="any" placeholder="ServingCellRSRPdBm">
                        <input v-model="formData.mtn.num_users" class="md:col-start-2 bg-[#F1F6FD] h-12 p-3 rounded"
                            type="number" step="any" placeholder="Number of Users">
                    </div>
                </section>

                <!-- ---AIRTEL--- -->
                <section class="mt-2 border-t border-airtel w-full " :class="{ hidden: airtelState }">
                    <div class="bg-airtel w-8 h-4">
                        <span class="text-xs flex text-white items-center justify-center">airtel</span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-2 p-3">
                        <select v-model="formData.airtel.ServingCellIdentity" class="bg-[#F1F6FD] h-12 p-3 rounded"
                            name="ServingCellId" id="">
                            <option disabled selected value="">serving cell identity</option>
                            <option v-for="(item, index) in airtelData.servingCellIdentity" :key="index" :value="item">{{
                                item
                            }}</option>
                        </select>
                        <select v-model="formData.airtel.CellName" class="bg-[#F1F6FD] h-12 p-3 rounded" name="cellname"
                            id="">
                            <option disabled selected value="">cell name</option>
                            <option v-for="(item, index) in airtelData.cellName" :key="index" :value="item">{{ item }}
                            </option>
                        </select>
                        <select v-model="formData.airtel.SiteName" class="bg-[#F1F6FD] h-12 p-3 rounded" name="sitename"
                            id="">
                            <option disabled selected value="">site name</option>
                            <option v-for="(item, index) in airtelData.siteName" :key="index" :value="item">{{ item }}
                            </option>
                        </select>
                        <input v-model="formData.airtel.RSSINRdB" class="bg-[#F1F6FD] h-12 p-3 rounded" type="number"
                            step="any" placeholder="RSSINRdB">
                        <input v-model="formData.airtel.ServingCellRSRQdB" class="bg-[#F1F6FD] h-12 p-3 rounded"
                            type="number" step="any" placeholder="ServingCellRSRQdB">
                        <input v-model="formData.airtel.ServingCellRSRPdBm" class="bg-[#F1F6FD] h-12 p-3 rounded"
                            type="number" step="any" placeholder="ServingCellRSRPdBm">
                        <input v-model="formData.airtel.num_users" class="md:col-start-2 bg-[#F1F6FD] h-12 p-3 rounded"
                            type="number" step="any" placeholder="Number of Users">
                    </div>

                </section>
                <!-- ---GLO--- -->
                <section class="mt-2 border-t border-glo w-full " :class="{ hidden: gloState }">
                    <div class="bg-glo w-8 h-4">
                        <span class="text-xs text-white flex items-center justify-center">glo</span>
                    </div>

                    <div class="grid md:grid-cols-3 gap-2 p-3">
                        <select v-model="formData.glo.ServingCellIdentity" class="bg-[#F1F6FD] h-12 p-3 rounded"
                            name="ServingCellId" id="">
                            <option disabled selected value="">serving cell identity</option>
                            <option v-for="(item, index) in gloData.servingCellIdentity" :key="index" :value="item">{{
                                item
                            }}</option>
                        </select>
                        <select v-model="formData.glo.CellName" class="bg-[#F1F6FD] h-12 p-3 rounded" name="cellname" id="">
                            <option disabled selected value="">cell name</option>
                            <option v-for="(item, index) in gloData.cellName" :key="index" :value="item">{{ item }}
                            </option>
                        </select>
                        <select v-model="formData.glo.SiteName" class="bg-[#F1F6FD] h-12 p-3 rounded" name="sitename" id="">
                            <option disabled selected value="">site name</option>
                            <option v-for="(item, index) in gloData.siteName" :key="index" :value="item">{{ item }}
                            </option>
                        </select>
                        <input v-model="formData.glo.RSSINRdB" class="bg-[#F1F6FD] h-12 p-3 rounded" type="number"
                            step="any" placeholder="RSSINRdB">
                        <input v-model="formData.glo.ServingCellRSRQdB" class="bg-[#F1F6FD] h-12 p-3 rounded" type="number"
                            step="any" placeholder="ServingCellRSRQdB">
                        <input v-model="formData.glo.ServingCellRSRPdBm" class="bg-[#F1F6FD] h-12 p-3 rounded" type="number"
                            step="any" placeholder="ServingCellRSRPdBm">
                        <input v-model="formData.glo.num_users" class="md:col-start-2 bg-[#F1F6FD] h-12 p-3 rounded"
                            type="number" step="any" placeholder="Number of Users">
                    </div>

                </section>
                <!-- ---ETISALAT--- -->
                <section class="mt-2 border-t border-etisalat w-full " :class="{ hidden: etisalatState }">
                    <div class="bg-etisalat w-12 h-4">
                        <span class="text-xs  text-white flex items-center justify-center">etisalat</span>
                    </div>

                    <div class="grid md:grid-cols-3 gap-2 p-3">
                        <select v-model="formData.etisalat.ServingCellIdentity" class="bg-[#F1F6FD] h-12 p-3 rounded"
                            name="ServingCellId" id="">
                            <option disabled selected value="">serving cell identity</option>
                            <option v-for="(item, index) in etisalatData.servingCellIdentity" :key="index" :value="item">{{
                                item
                            }}</option>
                        </select>
                        <select v-model="formData.etisalat.CellName" class="bg-[#F1F6FD] h-12 p-3 rounded" name="cellname"
                            id="">
                            <option disabled selected value="">cell name</option>
                            <option v-for="(item, index) in etisalatData.cellName" :key="index" :value="item">{{ item }}
                            </option>
                        </select>
                        <select v-model="formData.etisalat.SiteName" class="bg-[#F1F6FD] h-12 p-3 rounded" name="sitename"
                            id="">
                            <option disabled selected value="">site name</option>
                            <option v-for="(item, index) in etisalatData.siteName" :key="index" :value="item">{{ item }}
                            </option>
                        </select>
                        <input v-model="formData.etisalat.RSSINRdB" class="bg-[#F1F6FD] h-12 p-3 rounded" type="number"
                            step="any" placeholder="RSSINRdB">
                        <input v-model="formData.etisalat.ServingCellRSRQdB" class="bg-[#F1F6FD] h-12 p-3 rounded"
                            type="number" step="any" placeholder="ServingCellRSRQdB">
                        <input v-model="formData.etisalat.ServingCellRSRPdBm" class="bg-[#F1F6FD] h-12 p-3 rounded"
                            type="number" step="any" placeholder="ServingCellRSRPdBm">
                        <input v-model="formData.etisalat.num_users" class="md:col-start-2 bg-[#F1F6FD] h-12 p-3 rounded"
                            type="number" step="any" placeholder="Number of Users">
                    </div>

                </section>

                <div class="flex flex-col justify-center items-center mt-5">
                    <p v-if="!canSubmitForm" class="text-sm font-['Soleil'] font-normal text-red-600">*Pick at least 3
                        telcos
                    </p>

                    <button type="submit" :disabled="!canSubmitForm" :class="{ 'btn-disabled': canSubmitForm == false }"
                        class=" mt-2 w-80 h-12 text-white btn-primary">Predict Channel Utility for Borrowing</button>
                </div>
            </form>
        </section>


    </div>
</template>

<script setup lang="ts">
import Form from '@/components/Form.vue'
import PerformanceBlock from '@/components/PerformanceBlock.vue'
import { ref, watch, watchEffect, inject } from 'vue'
import { mtn, glo, etisalat, airtel } from '@/data'
// import api from '@/services/AxiosService'
import axios from 'axios'
import type { TelcoPropObject, TelcoRawObject } from '@/types/TelcoData'

const isLoading: any = inject('isLoading')
const hasError: any = inject('hasError')

const mtnData = ref(mtn)
const gloData = ref(glo)
const etisalatData = ref(etisalat)
const airtelData = ref(airtel)

const mtnState = ref(false)
const airtelState = ref(false)
const gloState = ref(false)
const etisalatState = ref(false)
const canSubmitForm = ref<boolean>(true)

const toggleTelco = (telco: string) => {
    switch (telco) {
        case 'mtn':
            mtnState.value = !mtnState.value
            break;
        case 'airtel':
            airtelState.value = !airtelState.value
            break;
        case 'glo':
            gloState.value = !gloState.value
            break;
        case 'etisalat':
            etisalatState.value = !etisalatState.value
            break;

        default:
            break;
    }
}
const checkDisableSubmitButton = () => {
    const truthyCount = [mtnState.value, gloState.value, airtelState.value, etisalatState.value].filter(Boolean).length;
    canSubmitForm.value = truthyCount < 2

};

watch([mtnState, airtelState, etisalatState, gloState], checkDisableSubmitButton)



const formData: any = ref({
    "commons": {
        "Longitude": null,
        "Latitude": null,
        "minutes": null,
        "seconds": null,
    },
    "mtn": {
        "ServingCellIdentity": "",
        "CellName": "",
        "SiteName": "",
        "ServingCellRSRQdB": null,
        "RSSINRdB": null,
        "ServingCellRSRPdBm": null,
        "num_users": null
    },
    "airtel": {
        "ServingCellIdentity": "",
        "CellName": "",
        "SiteName": "",
        "ServingCellRSRQdB": null,
        "RSSINRdB": null,
        "ServingCellRSRPdBm": null,
        "num_users": null
    },
    "glo": {
        "ServingCellIdentity": "",
        "CellName": "",
        "SiteName": "",
        "ServingCellRSRQdB": null,
        "RSSINRdB": null,
        "ServingCellRSRPdBm": null,
        "num_users": null
    },
    "etisalat": {
        "ServingCellIdentity": "",
        "CellName": "",
        "SiteName": "",
        "ServingCellRSRQdB": null,
        "RSSINRdB": null,
        "ServingCellRSRPdBm": null,
        "num_users": null
    },
})


let selectedTelcos: TelcoPropObject[]

const predict = async () => {
    isLoading.value = true
    // get selected telcos
    const telcos: TelcoRawObject = {
        "mtn": {
            state: mtnState.value,
            confidence: 83
        },
        "airtel": {
            state: airtelState.value,
            confidence: 71
        },
        "glo": {
            state: gloState.value,
            confidence: 78
        },
        "etisalat": {
            state: etisalatState.value,
            confidence: 81
        },
    };
    selectedTelcos = Object.keys(telcos)
        .filter(key => !telcos[key].state)
        .map(key => {
            return {
                name: key,
                confidence: telcos[key].confidence
            }
        })

    // make requests to all selected telcos simultaneously
    const requests = selectedTelcos.map((telco) => {
        // return axios.post('https://ncc-channel-utilization-api.herokuapp.com/api/v1/predict_' + telco.name, {
        //     inputs: [Object.assign({}, formData.value.commons, formData.value[telco.name])]
        // })

        return fetch('https://ncc-channel-utilization-api.herokuapp.com/api/v1/predict_' + telco.name, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                inputs: [Object.assign({}, formData.value.commons, formData.value[telco.name])]
            })
        })
    })

    const allRequests = Promise.all(requests)
    try {
        const allResponses: any = await allRequests;
        isModalOpen.value = true


        // attach confidence level and name of telco to prediction result array of objects 
        //(i.e essentially attach selectedTelcos object to prediction result)
        for (let index = 0; index < allResponses.length; index++) {
            // allResponses[index].data.predictions[0] = 0
            allResponses[index] = { ...allResponses[index].data, ...selectedTelcos[index] }
        }

        predictionResults.value = allResponses

    } catch (anyErrors) {
        hasError.value = true
    } finally {

        isLoading.value = false

    }



}
const predictionResults = ref()
const isModalOpen = ref(false)

const modalStateChange = () => {
    isModalOpen.value = false
}


watchEffect(() => {
    if (hasError.value) {
        setTimeout(() => {
            hasError.value = false
        }, 3000)
    }
})

</script>

<style scoped ></style>