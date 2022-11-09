<template>

  <div style="width:100%">
    <GChart style="width:100%" :type="type" :data="data" :options="options" :settings="settings"></GChart>
  </div>

</template>

<script setup>

import { GChart } from "vue-google-charts";

const columns = [
  { type: "string", id: "President" },
  { type: "date", id: "Start" },
  { type: "date", id: "End" },
];

const rows = [
  ["Washington", new Date(1789, 3, 30), new Date(1797, 2, 4)],
  ["Adams", new Date(1797, 2, 4), new Date(1801, 2, 4)],
  ["Jefferson", new Date(1801, 2, 4), new Date(1809, 2, 4)],
];

const type = "Timeline";

const data = [columns, ...rows];

const options = {
  width: 800,
  height: 600,
};

const settings = {
  packages: ['timeline']
}
// export default defineComponent({
//   name: "GoogleChart",
//   components: {
//     GChart,
//   },
//   setup() {
//     return () =>
//       h(GChart, {
//         data,
//         options,
//         type,
//         settings: {
//           packages: ["timeline"],
//         },
//       });
//   },
// });
</script>
