import { defineProps, computed } from 'vue';
import events from '../data/events.json';
import LayoutHome from './LayoutHome.vue';
import LayoutOne from './LayoutOne.vue';
import LayoutTwo from './LayoutTwo.vue';
import LayoutThree from './LayoutThree.vue';
const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps();
const event = computed(() => events.find(event => event.id === props.eventId) || null);
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
    if (__VLS_ctx.event && __VLS_ctx.event.layoutId == 0) {
        // @ts-ignore
        [LayoutHome,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(LayoutHome, new LayoutHome({ event: ((__VLS_ctx.event)), }));
        const __VLS_1 = __VLS_0({ event: ((__VLS_ctx.event)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    }
    else if (__VLS_ctx.event && __VLS_ctx.event.layoutId == 1) {
        // @ts-ignore
        [LayoutOne,];
        // @ts-ignore
        const __VLS_5 = __VLS_asFunctionalComponent(LayoutOne, new LayoutOne({ event: ((__VLS_ctx.event)), }));
        const __VLS_6 = __VLS_5({ event: ((__VLS_ctx.event)), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    }
    else if (__VLS_ctx.event && __VLS_ctx.event.layoutId == 2) {
        // @ts-ignore
        [LayoutTwo,];
        // @ts-ignore
        const __VLS_10 = __VLS_asFunctionalComponent(LayoutTwo, new LayoutTwo({ event: ((__VLS_ctx.event)), }));
        const __VLS_11 = __VLS_10({ event: ((__VLS_ctx.event)), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    }
    else if (__VLS_ctx.event && __VLS_ctx.event.layoutId == 3) {
        // @ts-ignore
        [LayoutThree,];
        // @ts-ignore
        const __VLS_15 = __VLS_asFunctionalComponent(LayoutThree, new LayoutThree({ event: ((__VLS_ctx.event)), }));
        const __VLS_16 = __VLS_15({ event: ((__VLS_ctx.event)), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
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
            LayoutHome: LayoutHome,
            LayoutOne: LayoutOne,
            LayoutTwo: LayoutTwo,
            LayoutThree: LayoutThree,
            event: event,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
