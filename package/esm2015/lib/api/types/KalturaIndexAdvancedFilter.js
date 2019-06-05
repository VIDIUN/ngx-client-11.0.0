/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchItem } from './KalturaSearchItem';
/**
 * @record
 */
export function KalturaIndexAdvancedFilterArgs() { }
/** @type {?|undefined} */
KalturaIndexAdvancedFilterArgs.prototype.indexIdGreaterThan;
/** @type {?|undefined} */
KalturaIndexAdvancedFilterArgs.prototype.depthGreaterThanEqual;
export class KalturaIndexAdvancedFilter extends KalturaSearchItem {
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
            objectType: { type: 'c', default: 'KalturaIndexAdvancedFilter' },
            indexIdGreaterThan: { type: 'n' },
            depthGreaterThanEqual: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaIndexAdvancedFilter.prototype.indexIdGreaterThan;
    /** @type {?} */
    KalturaIndexAdvancedFilter.prototype.depthGreaterThanEqual;
}
typesMappingStorage['KalturaIndexAdvancedFilter'] = KalturaIndexAdvancedFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUluZGV4QWR2YW5jZWRGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFJbmRleEFkdmFuY2VkRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7QUFRL0UsTUFBTSxpQ0FBa0MsU0FBUSxpQkFBaUI7Ozs7SUFLN0QsWUFBWSxJQUFzQztRQUU5QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDL0Usa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUM3QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLDBCQUEwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTZWFyY2hJdGVtLCBLYWx0dXJhU2VhcmNoSXRlbUFyZ3MgfSBmcm9tICcuL0thbHR1cmFTZWFyY2hJdGVtJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhSW5kZXhBZHZhbmNlZEZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVNlYXJjaEl0ZW1BcmdzIHtcbiAgICBpbmRleElkR3JlYXRlclRoYW4/IDogbnVtYmVyO1xuXHRkZXB0aEdyZWF0ZXJUaGFuRXF1YWw/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhSW5kZXhBZHZhbmNlZEZpbHRlciBleHRlbmRzIEthbHR1cmFTZWFyY2hJdGVtIHtcblxuICAgIGluZGV4SWRHcmVhdGVyVGhhbiA6IG51bWJlcjtcblx0ZGVwdGhHcmVhdGVyVGhhbkVxdWFsIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhSW5kZXhBZHZhbmNlZEZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhSW5kZXhBZHZhbmNlZEZpbHRlcicgfSxcblx0XHRcdFx0aW5kZXhJZEdyZWF0ZXJUaGFuIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGRlcHRoR3JlYXRlclRoYW5FcXVhbCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhSW5kZXhBZHZhbmNlZEZpbHRlciddID0gS2FsdHVyYUluZGV4QWR2YW5jZWRGaWx0ZXI7Il19