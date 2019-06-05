/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPlayReadyPolicy } from './KalturaPlayReadyPolicy';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaPlayReadyLicenseDetailsArgs() { }
/** @type {?|undefined} */
KalturaPlayReadyLicenseDetailsArgs.prototype.policy;
/** @type {?|undefined} */
KalturaPlayReadyLicenseDetailsArgs.prototype.beginDate;
/** @type {?|undefined} */
KalturaPlayReadyLicenseDetailsArgs.prototype.expirationDate;
/** @type {?|undefined} */
KalturaPlayReadyLicenseDetailsArgs.prototype.removalDate;
export class KalturaPlayReadyLicenseDetails extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaPlayReadyLicenseDetails' },
            policy: { type: 'o', subTypeConstructor: KalturaPlayReadyPolicy, subType: 'KalturaPlayReadyPolicy' },
            beginDate: { type: 'n' },
            expirationDate: { type: 'n' },
            removalDate: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaPlayReadyLicenseDetails.prototype.policy;
    /** @type {?} */
    KalturaPlayReadyLicenseDetails.prototype.beginDate;
    /** @type {?} */
    KalturaPlayReadyLicenseDetails.prototype.expirationDate;
    /** @type {?} */
    KalturaPlayReadyLicenseDetails.prototype.removalDate;
}
typesMappingStorage['KalturaPlayReadyLicenseDetails'] = KalturaPlayReadyLicenseDetails;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXlSZWFkeUxpY2Vuc2VEZXRhaWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUGxheVJlYWR5TGljZW5zZURldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVbEYsTUFBTSxxQ0FBc0MsU0FBUSxpQkFBaUI7Ozs7SUFPakUsWUFBWSxJQUEwQztRQUVsRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkYsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDeEcsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGdDQUFnQyxDQUFDLEdBQUcsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBsYXlSZWFkeVBvbGljeSB9IGZyb20gJy4vS2FsdHVyYVBsYXlSZWFkeVBvbGljeSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVBsYXlSZWFkeUxpY2Vuc2VEZXRhaWxzQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHBvbGljeT8gOiBLYWx0dXJhUGxheVJlYWR5UG9saWN5O1xuXHRiZWdpbkRhdGU/IDogbnVtYmVyO1xuXHRleHBpcmF0aW9uRGF0ZT8gOiBudW1iZXI7XG5cdHJlbW92YWxEYXRlPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVBsYXlSZWFkeUxpY2Vuc2VEZXRhaWxzIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcG9saWN5IDogS2FsdHVyYVBsYXlSZWFkeVBvbGljeTtcblx0YmVnaW5EYXRlIDogbnVtYmVyO1xuXHRleHBpcmF0aW9uRGF0ZSA6IG51bWJlcjtcblx0cmVtb3ZhbERhdGUgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFQbGF5UmVhZHlMaWNlbnNlRGV0YWlsc0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUGxheVJlYWR5TGljZW5zZURldGFpbHMnIH0sXG5cdFx0XHRcdHBvbGljeSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBsYXlSZWFkeVBvbGljeSwgc3ViVHlwZSA6ICdLYWx0dXJhUGxheVJlYWR5UG9saWN5JyB9LFxuXHRcdFx0XHRiZWdpbkRhdGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZXhwaXJhdGlvbkRhdGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cmVtb3ZhbERhdGUgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVBsYXlSZWFkeUxpY2Vuc2VEZXRhaWxzJ10gPSBLYWx0dXJhUGxheVJlYWR5TGljZW5zZURldGFpbHM7Il19