<script setup>
import {ref} from "vue";
import Syntactic from "@/assets/js/Syntactic";
import {getTokens} from "@/assets/js/LexicalAnalyzer";
import Semantic from "@/assets/js/Semantic";

const text = ref(`function name(string a = "Hello World", int c = 1, char b = 'a'): int
{
\tstring a = "  ";
}`);

function submit() {
  setError('');
  setSuccess('');
  if (!text.value) {
    return setError('Enter with your code!')
  }

  getTokens(text)
      .then(data => {
        Syntactic.parse(data)
            .then(tree => {
              const semantic = new Semantic(tree);
              semantic.validate().then(response => {
                setSuccess(response);
              }).catch(error => {
                console.log(error);
                setError(error);
              });
            }).catch(error => {
          setError(error);
        });
      }).catch(error => {
    setError(error);
  });
}

const errorMsg = ref('');

function setError(msg) {
  errorMsg.value = msg;
}

const successMsg = ref('');

function setSuccess(msg) {
  successMsg.value = msg;
}
</script>

<template>
  <form class="bg-body-tertiary mt-5 px-4 py-3 rounded mb-3" @submit.prevent="submit">
    <div class="mb-3">
      <label for="text" class="form-label">Your Code</label>
      <textarea v-model="text" name="text" id="text"
                rows="10"
                class="form-control"
                :class="{ 'is-invalid': errorMsg, 'is-valid': successMsg }"
                placeholder="Enter with your code here..."
      />
      <div class="invalid-feedback">
        {{ errorMsg }}
      </div>
      <div class="valid-feedback">
        {{ successMsg }}
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>
