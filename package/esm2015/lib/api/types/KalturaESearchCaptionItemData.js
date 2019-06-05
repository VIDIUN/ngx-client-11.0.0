/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchItemData } from './KalturaESearchItemData';
/**
 * @record
 */
export function KalturaESearchCaptionItemDataArgs() { }
/** @type {?|undefined} */
KalturaESearchCaptionItemDataArgs.prototype.line;
/** @type {?|undefined} */
KalturaESearchCaptionItemDataArgs.prototype.startsAt;
/** @type {?|undefined} */
KalturaESearchCaptionItemDataArgs.prototype.endsAt;
/** @type {?|undefined} */
KalturaESearchCaptionItemDataArgs.prototype.language;
/** @type {?|undefined} */
KalturaESearchCaptionItemDataArgs.prototype.captionAssetId;
/** @type {?|undefined} */
KalturaESearchCaptionItemDataArgs.prototype.label;
export class KalturaESearchCaptionItemData extends KalturaESearchItemData {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchCaptionItemData' },
            line: { type: 's' },
            startsAt: { type: 'n' },
            endsAt: { type: 'n' },
            language: { type: 's' },
            captionAssetId: { type: 's' },
            label: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaESearchCaptionItemData.prototype.line;
    /** @type {?} */
    KalturaESearchCaptionItemData.prototype.startsAt;
    /** @type {?} */
    KalturaESearchCaptionItemData.prototype.endsAt;
    /** @type {?} */
    KalturaESearchCaptionItemData.prototype.language;
    /** @type {?} */
    KalturaESearchCaptionItemData.prototype.captionAssetId;
    /** @type {?} */
    KalturaESearchCaptionItemData.prototype.label;
}
typesMappingStorage['KalturaESearchCaptionItemData'] = KalturaESearchCaptionItemData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hDYXB0aW9uSXRlbURhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFU2VhcmNoQ2FwdGlvbkl0ZW1EYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUE4QixNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQVk5RixNQUFNLG9DQUFxQyxTQUFRLHNCQUFzQjs7OztJQVNyRSxZQUFZLElBQXlDO1FBRWpELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUNsRixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNiLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsK0JBQStCLENBQUMsR0FBRyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaEl0ZW1EYXRhLCBLYWx0dXJhRVNlYXJjaEl0ZW1EYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUVTZWFyY2hJdGVtRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVTZWFyY2hDYXB0aW9uSXRlbURhdGFBcmdzICBleHRlbmRzIEthbHR1cmFFU2VhcmNoSXRlbURhdGFBcmdzIHtcbiAgICBsaW5lPyA6IHN0cmluZztcblx0c3RhcnRzQXQ/IDogbnVtYmVyO1xuXHRlbmRzQXQ/IDogbnVtYmVyO1xuXHRsYW5ndWFnZT8gOiBzdHJpbmc7XG5cdGNhcHRpb25Bc3NldElkPyA6IHN0cmluZztcblx0bGFiZWw/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRVNlYXJjaENhcHRpb25JdGVtRGF0YSBleHRlbmRzIEthbHR1cmFFU2VhcmNoSXRlbURhdGEge1xuXG4gICAgbGluZSA6IHN0cmluZztcblx0c3RhcnRzQXQgOiBudW1iZXI7XG5cdGVuZHNBdCA6IG51bWJlcjtcblx0bGFuZ3VhZ2UgOiBzdHJpbmc7XG5cdGNhcHRpb25Bc3NldElkIDogc3RyaW5nO1xuXHRsYWJlbCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVTZWFyY2hDYXB0aW9uSXRlbURhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hDYXB0aW9uSXRlbURhdGEnIH0sXG5cdFx0XHRcdGxpbmUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhcnRzQXQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZW5kc0F0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGxhbmd1YWdlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNhcHRpb25Bc3NldElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGxhYmVsIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFU2VhcmNoQ2FwdGlvbkl0ZW1EYXRhJ10gPSBLYWx0dXJhRVNlYXJjaENhcHRpb25JdGVtRGF0YTsiXX0=