/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSessionRestriction } from './KalturaSessionRestriction';
/**
 * @record
 */
export function KalturaPreviewRestrictionArgs() { }
/** @type {?|undefined} */
KalturaPreviewRestrictionArgs.prototype.previewLength;
export class KalturaPreviewRestriction extends KalturaSessionRestriction {
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
            objectType: { type: 'c', default: 'KalturaPreviewRestriction' },
            previewLength: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaPreviewRestriction.prototype.previewLength;
}
typesMappingStorage['KalturaPreviewRestriction'] = KalturaPreviewRestriction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVByZXZpZXdSZXN0cmljdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVByZXZpZXdSZXN0cmljdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx5QkFBeUIsRUFBaUMsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7OztBQU92RyxNQUFNLGdDQUFpQyxTQUFRLHlCQUF5Qjs7OztJQUlwRSxZQUFZLElBQXFDO1FBRTdDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUM5RSxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3JCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTZXNzaW9uUmVzdHJpY3Rpb24sIEthbHR1cmFTZXNzaW9uUmVzdHJpY3Rpb25BcmdzIH0gZnJvbSAnLi9LYWx0dXJhU2Vzc2lvblJlc3RyaWN0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUHJldmlld1Jlc3RyaWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhU2Vzc2lvblJlc3RyaWN0aW9uQXJncyB7XG4gICAgcHJldmlld0xlbmd0aD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFQcmV2aWV3UmVzdHJpY3Rpb24gZXh0ZW5kcyBLYWx0dXJhU2Vzc2lvblJlc3RyaWN0aW9uIHtcblxuICAgIHByZXZpZXdMZW5ndGggOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFQcmV2aWV3UmVzdHJpY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVByZXZpZXdSZXN0cmljdGlvbicgfSxcblx0XHRcdFx0cHJldmlld0xlbmd0aCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUHJldmlld1Jlc3RyaWN0aW9uJ10gPSBLYWx0dXJhUHJldmlld1Jlc3RyaWN0aW9uOyJdfQ==