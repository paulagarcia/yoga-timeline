import ContentGenerator from '../components/ContentGenerator.vue';
import TimeLine from '../components/TimeLine.vue';
import { defineProps, ref, watch } from 'vue';
import events from '../data/events.json';
const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps();
const selectedEventId = ref();
const selectedEvent = ref(events.find((event) => event.id === selectedEventId.value) || null);
watch(() => props.eventId, (newValue) => {
    selectedEventId.value = newValue;
    selectedEvent.value = events.find((event) => event.id === newValue) || null;
}, { deep: true, immediate: true });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("page-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-1/12") }, });
    // @ts-ignore
    [TimeLine,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(TimeLine, new TimeLine({ eventId: ((__VLS_ctx.selectedEventId ?? 0)), id: ((__VLS_ctx.eventId)), }));
    const __VLS_1 = __VLS_0({ eventId: ((__VLS_ctx.selectedEventId ?? 0)), id: ((__VLS_ctx.eventId)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-11/12") }, });
    // @ts-ignore
    [ContentGenerator,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(ContentGenerator, new ContentGenerator({ eventId: ((__VLS_ctx.selectedEventId ?? 0)), id: ((__VLS_ctx.eventId)), }));
    const __VLS_6 = __VLS_5({ eventId: ((__VLS_ctx.selectedEventId ?? 0)), id: ((__VLS_ctx.eventId)), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    __VLS_styleScopedClasses['page-wrapper'];
    __VLS_styleScopedClasses['w-1/12'];
    __VLS_styleScopedClasses['w-11/12'];
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
            ContentGenerator: ContentGenerator,
            TimeLine: TimeLine,
            selectedEventId: selectedEventId,
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
