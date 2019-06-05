/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleEventType } from './KalturaScheduleEventType';
import { KalturaBulkUploadJobData } from './KalturaBulkUploadJobData';
/**
 * @record
 */
export function KalturaBulkUploadICalJobDataArgs() { }
/** @type {?|undefined} */
KalturaBulkUploadICalJobDataArgs.prototype.eventsType;
export class KalturaBulkUploadICalJobData extends KalturaBulkUploadJobData {
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
            objectType: { type: 'c', default: 'KalturaBulkUploadICalJobData' },
            eventsType: { type: 'en', subTypeConstructor: KalturaScheduleEventType, subType: 'KalturaScheduleEventType' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBulkUploadICalJobData.prototype.eventsType;
}
typesMappingStorage['KalturaBulkUploadICalJobData'] = KalturaBulkUploadICalJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWRJQ2FsSm9iRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUJ1bGtVcGxvYWRJQ2FsSm9iRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSx3QkFBd0IsRUFBZ0MsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7OztBQU9wRyxNQUFNLG1DQUFvQyxTQUFRLHdCQUF3Qjs7OztJQUl0RSxZQUFZLElBQXdDO1FBRWhELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUNqRixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHdCQUF3QixFQUFFLE9BQU8sRUFBRywwQkFBMEIsRUFBRTtTQUN4RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7O0FBRUQsbUJBQW1CLENBQUMsOEJBQThCLENBQUMsR0FBRyw0QkFBNEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2NoZWR1bGVFdmVudFR5cGUgfSBmcm9tICcuL0thbHR1cmFTY2hlZHVsZUV2ZW50VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQnVsa1VwbG9hZEpvYkRhdGEsIEthbHR1cmFCdWxrVXBsb2FkSm9iRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFCdWxrVXBsb2FkSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJ1bGtVcGxvYWRJQ2FsSm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhQXJncyB7XG4gICAgZXZlbnRzVHlwZT8gOiBLYWx0dXJhU2NoZWR1bGVFdmVudFR5cGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFCdWxrVXBsb2FkSUNhbEpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhQnVsa1VwbG9hZEpvYkRhdGEge1xuXG4gICAgZXZlbnRzVHlwZSA6IEthbHR1cmFTY2hlZHVsZUV2ZW50VHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUJ1bGtVcGxvYWRJQ2FsSm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQnVsa1VwbG9hZElDYWxKb2JEYXRhJyB9LFxuXHRcdFx0XHRldmVudHNUeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNjaGVkdWxlRXZlbnRUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFTY2hlZHVsZUV2ZW50VHlwZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUJ1bGtVcGxvYWRJQ2FsSm9iRGF0YSddID0gS2FsdHVyYUJ1bGtVcGxvYWRJQ2FsSm9iRGF0YTsiXX0=