<template>
  <div class="new-note">
    <label for="">Title</label>
    <input type="text" v-model="note.title" />

    <label for="">Priority</label>
    <select name="" id="" v-model="note.priority">
      <option value="standart">Standart</option>
      <option value="important">Important</option>
      <option value="very-important">Very important</option>
    </select>

    <label for="">Description</label>
    <textarea v-model="note.descr"></textarea>

    <button class="btn btnPrimary" @click="addNote" style="margin-top: 36px">
      New note
    </button>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addNote() {
      this.$emit("addNote", this.note);
    },
  },
};
</script>
 
<style lang="scss">
.new-note {
  text-align: center;
}
</style>