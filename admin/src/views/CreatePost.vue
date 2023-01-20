<template>
    <div id="create-post">
        <div class="grid grid-cols-10 px-12 my-10">
            <div class="col-span-7 rounded-lg py-10 dark:bg-[#171717] bg-white dark:border-0 border border-zinc-200">
                <div class="px-12">
                    <div class="grid grid-cols-2 items-start justify-between">
                        <div class="flex">
                            <button @click="openWindow($event)" class="relative cursor-pointer border-2 dark:text-zinc-300 dark:border-[#525252] rounded-md py-1.5 px-3 mr-3 dark:hover:bg-zinc-800 transition-all">
                                {{ AddCoverTxt }}
                                <input ref="coverImageElement" @change="previewImage($event)" type="file" name="coverImage"
                                     hidden class="absolute inset-0 opacity-0">
                            </button>
                            <button v-show="isShowPreview" @click="removePreview()" class="capitalize text-red-600 py-1.5 px-3 dark:hover:bg-zinc-800 hover:bg-zinc-100 transition-all rounded-md">remove</button>
                        </div>
                        <span v-show="isShowPreview" class="inline-block ml-auto w-36 h-24 border rounded border-dashed border-gray-500">
                            <img ref="preview" class="block w-full h-full object-cover" src="" alt="" />
                        </span>
                    </div>
                    <div class="my-7">
                        <input ref="titlePostElement" v-model="titlePost" id="title" type="text" placeholder="New post title here..."
                            class="text-5xl dark:text-white placeholder:text-zinc-700 dark:bg-[#171717] focus:outline-none">
                    </div>
                    <div class="mb-7">
                        <vSelect :options="options" placeholder="Add up to tags" v-model="tagsPost" :multiple="true">
                            <template #open-indicator="{ attributes }">
                                <span v-bind="attributes"></span>
                            </template>
                        </vSelect>
                    </div>

                </div>
                <div class="">
                    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                </div>
            </div>
            <div class="col-span-3"></div>
        </div>
        <div class="flex px-12 dark:text-white">
            <button @click="createPost(true)" class="px-3 py-1.5 text-white bg-indigo-800 rounded-md font-light hover:opacity-80 transition-all mr-6">Publish</button>
            <button @click="createPost(false)" class="px-3 py-1.5 dark:hover:bg-indigo-900/80 dark:hover:text-indigo-100 hover:bg-indigo-100 hover:text-indigo-800 rounded-md font-light transition-all">Save draft</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Post from '@/services/Post';
import vSelect from 'vue-select'
import { useUser } from '@/pinia-store/user';

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import { storeToRefs } from 'pinia';
// import Heading from '@ckeditor/ckeditor5-heading/src/heading';
// import Image from '@ckeditor/ckeditor5-image/src/image';
// import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
// import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
// import Link from '@ckeditor/ckeditor5-link/src/link';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
// import List from '@ckeditor/ckeditor5-list/src/list';
// import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
// import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
// import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
// import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
// import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
// import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment'; 

let editorData = ref('');
const titlePostElement = ref(null);
const editor = ClassicEditor;
const editorConfig = {
    plugins: [
        EssentialsPlugin,
        BoldPlugin,
        ItalicPlugin,
        LinkPlugin,
        ParagraphPlugin,
        BlockQuote
    ],

    toolbar: {
        items: [
            'bold',
            'italic',
            'link',
            'undo',
            'redo',
            'heading',
            'blockQuote'
        ]
    }
}
const { userJson } = storeToRefs(useUser());
const { _id:id } = userJson.value;
console.log(id);
const coverImage = ref();
const tagsPost = ref([]);


const options = ref(['Node', 'Vue', 'React', 'Css', 'Tailwind', 'Laravel', 'Php', 'Python', 'C#', 'C++', 'Ruby', 'Livewire', 'Sass', 'Bootstrap']);

function openWindow (e) {
    e.target.children[0]?.click();
}

let AddCoverTxt = ref('Add a cover image');
let preview = ref();
let isShowPreview = ref(false);
const coverImageElement = ref();
function previewImage(e) {
    AddCoverTxt.value = 'Change';
    isShowPreview.value = true;
    const input = e.currentTarget.files[0];
    coverImage.value = input;
    preview.value.src = URL.createObjectURL(input)
}

function removePreview() {
    AddCoverTxt.value = 'Add a cover image';
    isShowPreview.value = false;
    coverImageElement.value.value = '';
}

const titlePost = ref();

function createPost(isPublished) {
    const formData = new FormData();
    const tags = [...tagsPost.value];
    console.log(tags);
    formData.append('title', titlePost.value);
    formData.append('coverImage', coverImage.value);
    formData.append('author', id);
    formData.append('body', editorData.value);
    tagsPost.value.forEach(tag => {
        formData.append('tags', tag);
    })
    formData.append('isPublished', isPublished);
    Post.create(formData)
    .then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
}


onMounted(() => {
    titlePostElement.value.focus();
})

</script>

<style>
#create-post input::placeholder {
    color: #525252;
    caret-color: white;
}

html:has(.dark) .ck-toolbar.ck-toolbar_grouping {
    background-color: #090909 !important;
}

.ck-toolbar_grouping {
    border-width: 0 !important;
}

html:has(.dark) .ck-content.ck-editor__editable {
    color: white !important;
    background-color: #171717 !important;
}

.ck-toolbar_grouping {
    border-color: #171717 !important;
}

.ck.ck-editor__main {
    padding: 1rem 3rem;
}

html:has(.dark) .ck .ck-editor__main p {
    color: #a3a3a3 !important;
}

.ck-toolbar_grouping svg {
    fill: #d4d4d4 !important;
}

.ck-toolbar_grouping svg:hover {
    /* background-color: #312e81bf !important; */
}

html:has(.dark) .ck-rounded-corners.ck-editor__editable_inline {
    border-color: #171717 !important;

}

.vs__dropdown-toggle {
    border: none !important;
}

.vs__actions {
    /* display: none !important; */
}

html:has(.dark) .vs__dropdown-menu {
    background-color: #171717 !important;
    border: 1px solid #525252 !important;
    border-top: 0 !important;
}

html:has(.dark).vs__selected {
    background-color: #525252 !important;
    /* background-color: red !important; */
    color: #D4D4D8 !important;
}
</style>