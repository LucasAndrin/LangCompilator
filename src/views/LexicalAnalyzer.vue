<script setup>

import { ref } from "vue";
import { getTokens } from "@/assets/js/LexicalAnalyzer";

const tokens = ref([]);
const text = ref(`function name(string a = "Hello World", int c = 1, char b = 'a'): int\n{\n\treturn a + b;\n}`);
function submit() {
  setError('');
  if (!text.value) {
    return setError('Enter with your code!')
  }

  getTokens(text)
      .then(success => {
        console.info(success);
      })
      .catch(error => {
        console.error(error);
      });

  // getTokens.then(data => {
  //   tokens.value = data;
  // }).catch(error => {
  //   console.error(error);
  // });
}

const errorMsg = ref('');
function setError(msg) {
  errorMsg.value = msg;
}

</script>

<template>
  <form class="bg-body-tertiary mt-5 px-4 py-3 rounded mb-3" @submit.prevent="submit">
    <div class="mb-3">
      <label for="text" class="form-label">Your Code</label>
      <textarea v-model="text" name="text" id="text"
        rows="10"
        class="form-control"
        :class="{ 'is-invalid': errorMsg }"
        placeholder="Enter with your code here..."
      />
      <div class="invalid-feedback">
        {{ errorMsg }}
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>

  </form>
  <ul class="list-group bg-body-tertiary">
    <li class="list-group-item d-flex gap-2" v-for="(token, index) in tokens" :key="index">
      <span class="badge text-bg-primary">{{ token.name }}</span>
      <span class="badge text-bg-secondary">{{ JSON.stringify(token.lexeme) }}</span>
      <span class="badge text-bg-light">[{{ token.startPos }} - {{ token.finalPos }}]</span>
    </li>
  </ul>
</template>
