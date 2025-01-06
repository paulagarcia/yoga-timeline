import { defineProps, computed } from 'vue';
const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps();
const image1Src = computed(() => props.image1 ? new URL(`../assets/images/${props.image1}`, import.meta.url).href : '');
const image2Src = computed(() => props.image2 ? new URL(`../assets/images/${props.image2}`, import.meta.url).href : '');
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex column-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("blue-column h-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col relative top-8") }, });
    if (__VLS_ctx.image1) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.image1Src)), alt: ("Image 1"), ...{ class: ("image mb-8") }, });
    }
    if (__VLS_ctx.image2) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.image2Src)), alt: ("Image 2"), ...{ class: ("image") }, });
    }
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['column-container'];
    __VLS_styleScopedClasses['blue-column'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['top-8'];
    __VLS_styleScopedClasses['image'];
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['image'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            image1Src: image1Src,
            image2Src: image2Src,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
