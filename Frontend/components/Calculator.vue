<template>
  <v-container>
    <v-row>
      <v-col>
        <div>
          <v-text-field label="Value 1" v-model="value1" type="number">
          </v-text-field>
        </div>
      </v-col>
      <v-col>
        <v-select
          label="Operation"
          v-model="selection"
          :items="operationSelection"
        >
        </v-select>
      </v-col>
      <v-col>
        <v-text-field label="Value 2" v-model="value2" type="number">
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col style="text-align: center">
        <v-btn @click="calculo"> Submit </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field label="Result" disabled :value="result"> </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    operationSelection: [
      { text: "Add", value: "add" },
      { text: "Subtract", value: "subtract" },
      { text: "Multiply", value: "multiply" },
      { text: "Divide", value: "divide" },
      { text: "Module", value: "module" },
    ],
    selection: null,
    value1: 0,
    value2: 0,
    result: 0,
  }),
  methods: {
    calculo: async function () {
      if (this.selection) {
        const { data } = await axios.post(
          `http://localhost:8080/api/${this.selection}`,
          {
            value1: this.value1,
            value2: this.value2,
          }
        );

        this.result = data.result;
      }
    },
  },
};
</script>
