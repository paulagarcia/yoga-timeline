import { defineProps, computed } from 'vue';
const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps();
const imageSrc = computed(() => new URL(`../assets/images/${props.event.image1}`, import.meta.url).href);
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
    __VLS_styleScopedClasses['column'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("layout-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("column justify-center border-page") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("yoga") }, });
    (__VLS_ctx.event.title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("uppercase mb-4 font-extrabold") }, });
    (__VLS_ctx.event.text1.title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("pr-10") }, });
    __VLS_asFunctionalDirective(__VLS_directives.vHtml)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, value: (__VLS_ctx.event.text1.content) }, null, null);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("column justify-end") }, });
    if (__VLS_ctx.event.text2) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("px-20 mb-12") }, });
        (__VLS_ctx.event.text2.content);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.imageSrc)), alt: ("Image"), });
    __VLS_styleScopedClasses['layout-container'];
    __VLS_styleScopedClasses['column'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['border-page'];
    __VLS_styleScopedClasses['yoga'];
    __VLS_styleScopedClasses['uppercase'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['font-extrabold'];
    __VLS_styleScopedClasses['pr-10'];
    __VLS_styleScopedClasses['column'];
    __VLS_styleScopedClasses['justify-end'];
    __VLS_styleScopedClasses['px-20'];
    __VLS_styleScopedClasses['mb-12'];
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
            imageSrc: imageSrc,
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
