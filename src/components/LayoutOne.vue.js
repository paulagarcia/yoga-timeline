import { defineProps, computed } from 'vue';
import YearTitleText from './YearTitleText.vue';
import BlueColumnWithImages from './BlueColumnWithImages.vue';
const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps();
const imageSrcTop = computed(() => new URL(`../assets/images/${props.event.imageTop}`, import.meta.url).href);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex h-full justify-between items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-2/5 pr-16") }, });
    // @ts-ignore
    [YearTitleText,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(YearTitleText, new YearTitleText({ event: ((__VLS_ctx.event)), }));
    const __VLS_1 = __VLS_0({ event: ((__VLS_ctx.event)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-3/5 relative h-full flex flex-col justify-end") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("absolute top-0 right-0 top-image") }, src: ((__VLS_ctx.imageSrcTop)), alt: ("Mapa"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex") }, });
    // @ts-ignore
    [BlueColumnWithImages,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(BlueColumnWithImages, new BlueColumnWithImages({ image1: ((__VLS_ctx.event.image1)), image2: ((__VLS_ctx.event.image2)), }));
    const __VLS_6 = __VLS_5({ image1: ((__VLS_ctx.event.image1)), image2: ((__VLS_ctx.event.image2)), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    if (__VLS_ctx.event.text2) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col justify-end pr-24 pb-24") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        (__VLS_ctx.event.text2.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_asFunctionalDirective(__VLS_directives.vHtml)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, value: (__VLS_ctx.event.text2.content) }, null, null);
    }
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['w-2/5'];
    __VLS_styleScopedClasses['pr-16'];
    __VLS_styleScopedClasses['w-3/5'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['justify-end'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['top-0'];
    __VLS_styleScopedClasses['right-0'];
    __VLS_styleScopedClasses['top-image'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['justify-end'];
    __VLS_styleScopedClasses['pr-24'];
    __VLS_styleScopedClasses['pb-24'];
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
            YearTitleText: YearTitleText,
            BlueColumnWithImages: BlueColumnWithImages,
            imageSrcTop: imageSrcTop,
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
