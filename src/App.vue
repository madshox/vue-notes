<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">

          <!-- Title -->
          <h1>{{ title }}</h1>

          <!-- message -->
          <message v-if="message" :message="message" />

          <!-- new note -->
          <newNote :note="note" @addNote="addNote"/>

          <!-- note list  -->
          <notes :notes="notes" @remove="removeNote"/>
          
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import message from "@/components/Message.vue";
import notes from "@/components/Notes.vue";
import newNote from "@/components/NewNote.vue";

export default {
  components: {
    message,
    newNote,
    notes,
  },
  data() {
    return {
      title: "Notes App",
      message: null,
      note: {
        title: "",
        descr: "",
      },
      notes: [
        {
          title: "First Note",
          descr: "Description for first note",
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          title: "Second Note",
          descr: "Description for second note",
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          title: "Third Note",
          descr: "Description for third note",
          date: new Date(Date.now()).toLocaleString(),
        },
      ],
    };
  },
  methods: {
    addNote() {
      // console.log(this.note);
      let { title, descr } = this.note;

      if (title == "") {
        this.message = "Title can't be blank";
        return false;
      }

      this.notes.push({
        title,
        descr,
        date: new Date(Date.now()).toLocaleString(),
      });

      this.note.title = "";
      this.note.descr = "";

      this.message = null;
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    }
  },
};
</script>

<style>
</style>
