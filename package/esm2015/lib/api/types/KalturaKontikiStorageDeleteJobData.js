/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStorageDeleteJobData } from './KalturaStorageDeleteJobData';
/**
 * @record
 */
export function KalturaKontikiStorageDeleteJobDataArgs() { }
/** @type {?|undefined} */
KalturaKontikiStorageDeleteJobDataArgs.prototype.contentMoid;
/** @type {?|undefined} */
KalturaKontikiStorageDeleteJobDataArgs.prototype.serviceToken;
export class KalturaKontikiStorageDeleteJobData extends KalturaStorageDeleteJobData {
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
            objectType: { type: 'c', default: 'KalturaKontikiStorageDeleteJobData' },
            contentMoid: { type: 's' },
            serviceToken: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaKontikiStorageDeleteJobData.prototype.contentMoid;
    /** @type {?} */
    KalturaKontikiStorageDeleteJobData.prototype.serviceToken;
}
typesMappingStorage['KalturaKontikiStorageDeleteJobData'] = KalturaKontikiStorageDeleteJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUtvbnRpa2lTdG9yYWdlRGVsZXRlSm9iRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUtvbnRpa2lTdG9yYWdlRGVsZXRlSm9iRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwyQkFBMkIsRUFBbUMsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7Ozs7O0FBUTdHLE1BQU0seUNBQTBDLFNBQVEsMkJBQTJCOzs7O0lBSy9FLFlBQVksSUFBOEM7UUFFdEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1lBQ3ZGLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNwQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxvQ0FBb0MsQ0FBQyxHQUFHLGtDQUFrQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTdG9yYWdlRGVsZXRlSm9iRGF0YSwgS2FsdHVyYVN0b3JhZ2VEZWxldGVKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYVN0b3JhZ2VEZWxldGVKb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhS29udGlraVN0b3JhZ2VEZWxldGVKb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhU3RvcmFnZURlbGV0ZUpvYkRhdGFBcmdzIHtcbiAgICBjb250ZW50TW9pZD8gOiBzdHJpbmc7XG5cdHNlcnZpY2VUb2tlbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFLb250aWtpU3RvcmFnZURlbGV0ZUpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhU3RvcmFnZURlbGV0ZUpvYkRhdGEge1xuXG4gICAgY29udGVudE1vaWQgOiBzdHJpbmc7XG5cdHNlcnZpY2VUb2tlbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUtvbnRpa2lTdG9yYWdlRGVsZXRlSm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhS29udGlraVN0b3JhZ2VEZWxldGVKb2JEYXRhJyB9LFxuXHRcdFx0XHRjb250ZW50TW9pZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZXJ2aWNlVG9rZW4gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUtvbnRpa2lTdG9yYWdlRGVsZXRlSm9iRGF0YSddID0gS2FsdHVyYUtvbnRpa2lTdG9yYWdlRGVsZXRlSm9iRGF0YTsiXX0=