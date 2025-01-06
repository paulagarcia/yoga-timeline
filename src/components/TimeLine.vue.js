import { ref } from 'vue';
import years from '../data/years'; // Importa los años desde el archivo years.ts
import { useRouter } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter(); // Importa el router de vue-router
const __VLS_props = defineProps();
const yearsWithId = ref(years);
const changePath = (id) => {
    router.push({ name: `event-${id}` });
};
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col h-full justify-center pr-6 shadows-into-light-two-regular") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("flex flex-col items-end justify-center mr-6 pr-3") }, });
    for (const [yearAndID] of __VLS_getVForSourceType((__VLS_ctx.yearsWithId))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.changePath(yearAndID.id);
                } }, key: ((yearAndID.id)), ...{ class: ("cursor-pointer mb-2") }, ...{ class: (({ 'text-xl selected': yearAndID.id === __VLS_ctx.eventId })) }, });
        (yearAndID.year);
    }
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['pr-6'];
    __VLS_styleScopedClasses['shadows-into-light-two-regular'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-end'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['mr-6'];
    __VLS_styleScopedClasses['pr-3'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['selected'];
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
            yearsWithId: yearsWithId,
            changePath: changePath,
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
