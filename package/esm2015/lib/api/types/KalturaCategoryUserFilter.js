/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCategoryUserBaseFilter } from './KalturaCategoryUserBaseFilter';
/**
 * @record
 */
export function KalturaCategoryUserFilterArgs() { }
/** @type {?|undefined} */
KalturaCategoryUserFilterArgs.prototype.categoryDirectMembers;
/** @type {?|undefined} */
KalturaCategoryUserFilterArgs.prototype.freeText;
/** @type {?|undefined} */
KalturaCategoryUserFilterArgs.prototype.relatedGroupsByUserId;
export class KalturaCategoryUserFilter extends KalturaCategoryUserBaseFilter {
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
            objectType: { type: 'c', default: 'KalturaCategoryUserFilter' },
            categoryDirectMembers: { type: 'b' },
            freeText: { type: 's' },
            relatedGroupsByUserId: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaCategoryUserFilter.prototype.categoryDirectMembers;
    /** @type {?} */
    KalturaCategoryUserFilter.prototype.freeText;
    /** @type {?} */
    KalturaCategoryUserFilter.prototype.relatedGroupsByUserId;
}
typesMappingStorage['KalturaCategoryUserFilter'] = KalturaCategoryUserFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhdGVnb3J5VXNlckZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNhdGVnb3J5VXNlckZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw2QkFBNkIsRUFBcUMsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7Ozs7Ozs7QUFTbkgsTUFBTSxnQ0FBaUMsU0FBUSw2QkFBNkI7Ozs7SUFNeEUsWUFBWSxJQUFxQztRQUU3QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDOUUscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzdCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMkJBQTJCLENBQUMsR0FBRyx5QkFBeUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ2F0ZWdvcnlVc2VyQmFzZUZpbHRlciwgS2FsdHVyYUNhdGVnb3J5VXNlckJhc2VGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ2F0ZWdvcnlVc2VyQmFzZUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNhdGVnb3J5VXNlckZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNhdGVnb3J5VXNlckJhc2VGaWx0ZXJBcmdzIHtcbiAgICBjYXRlZ29yeURpcmVjdE1lbWJlcnM/IDogYm9vbGVhbjtcblx0ZnJlZVRleHQ/IDogc3RyaW5nO1xuXHRyZWxhdGVkR3JvdXBzQnlVc2VySWQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ2F0ZWdvcnlVc2VyRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUNhdGVnb3J5VXNlckJhc2VGaWx0ZXIge1xuXG4gICAgY2F0ZWdvcnlEaXJlY3RNZW1iZXJzIDogYm9vbGVhbjtcblx0ZnJlZVRleHQgOiBzdHJpbmc7XG5cdHJlbGF0ZWRHcm91cHNCeVVzZXJJZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNhdGVnb3J5VXNlckZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ2F0ZWdvcnlVc2VyRmlsdGVyJyB9LFxuXHRcdFx0XHRjYXRlZ29yeURpcmVjdE1lbWJlcnMgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0ZnJlZVRleHQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVsYXRlZEdyb3Vwc0J5VXNlcklkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDYXRlZ29yeVVzZXJGaWx0ZXInXSA9IEthbHR1cmFDYXRlZ29yeVVzZXJGaWx0ZXI7Il19