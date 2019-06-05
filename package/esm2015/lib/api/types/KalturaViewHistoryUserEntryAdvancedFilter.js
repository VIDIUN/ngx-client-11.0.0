/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserEntryExtendedStatus } from './KalturaUserEntryExtendedStatus';
import { KalturaSearchItem } from './KalturaSearchItem';
/**
 * @record
 */
export function KalturaViewHistoryUserEntryAdvancedFilterArgs() { }
/** @type {?|undefined} */
KalturaViewHistoryUserEntryAdvancedFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaViewHistoryUserEntryAdvancedFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaViewHistoryUserEntryAdvancedFilterArgs.prototype.userIdEqual;
/** @type {?|undefined} */
KalturaViewHistoryUserEntryAdvancedFilterArgs.prototype.userIdIn;
/** @type {?|undefined} */
KalturaViewHistoryUserEntryAdvancedFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaViewHistoryUserEntryAdvancedFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaViewHistoryUserEntryAdvancedFilterArgs.prototype.extendedStatusEqual;
/** @type {?|undefined} */
KalturaViewHistoryUserEntryAdvancedFilterArgs.prototype.extendedStatusIn;
export class KalturaViewHistoryUserEntryAdvancedFilter extends KalturaSearchItem {
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
            objectType: { type: 'c', default: 'KalturaViewHistoryUserEntryAdvancedFilter' },
            idEqual: { type: 's' },
            idIn: { type: 's' },
            userIdEqual: { type: 's' },
            userIdIn: { type: 's' },
            updatedAtGreaterThanOrEqual: { type: 's' },
            updatedAtLessThanOrEqual: { type: 's' },
            extendedStatusEqual: { type: 'es', subTypeConstructor: KalturaUserEntryExtendedStatus, subType: 'KalturaUserEntryExtendedStatus' },
            extendedStatusIn: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaViewHistoryUserEntryAdvancedFilter.prototype.idEqual;
    /** @type {?} */
    KalturaViewHistoryUserEntryAdvancedFilter.prototype.idIn;
    /** @type {?} */
    KalturaViewHistoryUserEntryAdvancedFilter.prototype.userIdEqual;
    /** @type {?} */
    KalturaViewHistoryUserEntryAdvancedFilter.prototype.userIdIn;
    /** @type {?} */
    KalturaViewHistoryUserEntryAdvancedFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaViewHistoryUserEntryAdvancedFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaViewHistoryUserEntryAdvancedFilter.prototype.extendedStatusEqual;
    /** @type {?} */
    KalturaViewHistoryUserEntryAdvancedFilter.prototype.extendedStatusIn;
}
typesMappingStorage['KalturaViewHistoryUserEntryAdvancedFilter'] = KalturaViewHistoryUserEntryAdvancedFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVZpZXdIaXN0b3J5VXNlckVudHJ5QWR2YW5jZWRGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFWaWV3SGlzdG9yeVVzZXJFbnRyeUFkdmFuY2VkRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjL0UsTUFBTSxnREFBaUQsU0FBUSxpQkFBaUI7Ozs7SUFXNUUsWUFBWSxJQUFxRDtRQUU3RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMkNBQTJDLEVBQUU7WUFDOUYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QiwyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw4QkFBOEIsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDdEksZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDJDQUEyQyxDQUFDLEdBQUcseUNBQXlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVVzZXJFbnRyeUV4dGVuZGVkU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhVXNlckVudHJ5RXh0ZW5kZWRTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVNlYXJjaEl0ZW0sIEthbHR1cmFTZWFyY2hJdGVtQXJncyB9IGZyb20gJy4vS2FsdHVyYVNlYXJjaEl0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFWaWV3SGlzdG9yeVVzZXJFbnRyeUFkdmFuY2VkRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhU2VhcmNoSXRlbUFyZ3Mge1xuICAgIGlkRXF1YWw/IDogc3RyaW5nO1xuXHRpZEluPyA6IHN0cmluZztcblx0dXNlcklkRXF1YWw/IDogc3RyaW5nO1xuXHR1c2VySWRJbj8gOiBzdHJpbmc7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBzdHJpbmc7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBzdHJpbmc7XG5cdGV4dGVuZGVkU3RhdHVzRXF1YWw/IDogS2FsdHVyYVVzZXJFbnRyeUV4dGVuZGVkU3RhdHVzO1xuXHRleHRlbmRlZFN0YXR1c0luPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVZpZXdIaXN0b3J5VXNlckVudHJ5QWR2YW5jZWRGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhU2VhcmNoSXRlbSB7XG5cbiAgICBpZEVxdWFsIDogc3RyaW5nO1xuXHRpZEluIDogc3RyaW5nO1xuXHR1c2VySWRFcXVhbCA6IHN0cmluZztcblx0dXNlcklkSW4gOiBzdHJpbmc7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHN0cmluZztcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogc3RyaW5nO1xuXHRleHRlbmRlZFN0YXR1c0VxdWFsIDogS2FsdHVyYVVzZXJFbnRyeUV4dGVuZGVkU3RhdHVzO1xuXHRleHRlbmRlZFN0YXR1c0luIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVmlld0hpc3RvcnlVc2VyRW50cnlBZHZhbmNlZEZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVmlld0hpc3RvcnlVc2VyRW50cnlBZHZhbmNlZEZpbHRlcicgfSxcblx0XHRcdFx0aWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVzZXJJZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVzZXJJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZXh0ZW5kZWRTdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFVc2VyRW50cnlFeHRlbmRlZFN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhVXNlckVudHJ5RXh0ZW5kZWRTdGF0dXMnIH0sXG5cdFx0XHRcdGV4dGVuZGVkU3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVZpZXdIaXN0b3J5VXNlckVudHJ5QWR2YW5jZWRGaWx0ZXInXSA9IEthbHR1cmFWaWV3SGlzdG9yeVVzZXJFbnRyeUFkdmFuY2VkRmlsdGVyOyJdfQ==