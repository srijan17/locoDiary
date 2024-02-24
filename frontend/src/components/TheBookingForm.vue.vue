<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  pickup: '',
  dropoff: '',
  date: '',
  time: '',
  vehicle: '',
  passengers: '',
  luggage: '',
  notes: '',
})

const inputRules = {
  'email': [
    (v: string) => !!v || 'E-mail is required',
    (v: string) =>
      /.+@.+\..+/.test(v) || 'E-mail must be valid',
  ],
  'phone': [
    (v: string) => !!v || 'Phone is required',
    (v: string) =>
      v.length === 10 || 'Phone must be 10 digits',
  ],
  'pickup': [
    (v: string) => !!v || 'Pickup Address is required',
  ],
  'dropoff': [
    (v: string) => !!v || 'Dropoff Address is required',
  ],
  'date': [
    (v: string) => !!v || 'Date is required',
  ],
  'time': [
    (v: string) => !!v || 'Time is required',
  ],

}
const submitForm = () => {
  alert('Form submitted')
}

const resetForm = () => {
  formData.value = {
    name: '',
    email: '',
    phone: '',
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    vehicle: '',
    passengers: '',
    luggage: '',
    notes: '',
  }
}
</script>
<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-row>
        <v-col>
          <v-card flat>
            <v-card-title>
              <h3>Book a your move</h3>
            </v-card-title>
            <v-card-text>
              <v-form >
                <v-text-field
                variant="outlined"
                  v-model="formData.name"
                  label="Name"
                  required
                ></v-text-field>
                <v-text-field
                 variant="outlined"
                  v-model="formData.email"
                  label="Email"
                  required
                  :rules="inputRules.email"
                ></v-text-field>
                <v-text-field
                 variant="outlined"
                  v-model="formData.phone"
                  label="Phone"
                  required
                  :rules="inputRules.phone"
                ></v-text-field>
                <v-text-field
                 variant="outlined"
                  v-model="formData.pickup"
                  label="Pickup Address"
                  required
                  :rules="inputRules.pickup"
                ></v-text-field>
                <v-text-field
                 variant="outlined"
                  v-model="formData.dropoff"
                  label="Dropoff Address"
                  required
                  :rules="inputRules.dropoff"
                ></v-text-field>
                <v-text-field
                 variant="outlined"
                  v-model="formData.date"
                  type="date"
                  label="Date"
                  required
                  :rules="inputRules.date"
                ></v-text-field>
                <v-text-field
                 variant="outlined"
                 type="time"
                  v-model="formData.time"
                  label="Time"
                  required
                  :rules="inputRules.time"
                ></v-text-field>
                  <v-textarea
                   variant="outlined"
                    v-model="formData.notes"
                    label="Notes"
                    required
                  ></v-textarea>
                  <v-divider class="mt-4 mb-8"></v-divider>
                <v-text-field
                 variant="outlined"
                  v-model="formData.vehicle"
                  label="Vehicle"
                  required
                ></v-text-field>
                <v-text-field
                 variant="outlined"
                  v-model="formData.passengers"
                  label="Passengers"
                  required
                ></v-text-field>
                <v-text-field
                 variant="outlined"
                  v-model="formData.luggage"
                  label="Luggage"
                  required
                ></v-text-field>
                <v-btn color="error" variant="outlined" class="mr-4" @click="resetForm">Reset</v-btn>
                <v-btn color="success" variant="outlined" @click="submitForm">Submit</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card flat>
            <v-card-title>
              <h3>Form Data</h3>
            </v-card-title>
            <v-table >
              <thead>
                <tr>
                  <th>Field</th>
                  <th>Value</th>
                </tr>
                </thead>
                <tbody>
                  <tr v-for="(value, key) in formData" :key="key">
                    <td class="text-left">{{ key }}</td>
                    <td>{{ value }}</td>
                  </tr>
                </tbody>
            </v-table>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>


