/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaThumbParamsOutput } from './KalturaThumbParamsOutput';
import { KalturaListResponse } from './KalturaListResponse';
/**
 * @record
 */
export function KalturaThumbParamsOutputListResponseArgs() { }
export class KalturaThumbParamsOutputListResponse extends KalturaListResponse {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.objects === 'undefined')
            this.objects = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaThumbParamsOutputListResponse' },
            objects: { type: 'a', readOnly: true, subTypeConstructor: KalturaThumbParamsOutput, subType: 'KalturaThumbParamsOutput' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaThumbParamsOutputListResponse.prototype.objects;
}
typesMappingStorage['KalturaThumbParamsOutputListResponse'] = KalturaThumbParamsOutputListResponse;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVRodW1iUGFyYW1zT3V0cHV0TGlzdFJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVGh1bWJQYXJhbXNPdXRwdXRMaXN0UmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsbUJBQW1CLEVBQTJCLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBT3JGLE1BQU0sMkNBQTRDLFNBQVEsbUJBQW1COzs7O0lBSXpFLFlBQVksSUFBZ0Q7UUFFeEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0tBQzlEOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQ0FBc0MsRUFBRTtZQUN6RixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsd0JBQXdCLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1NBQ3JILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxzQ0FBc0MsQ0FBQyxHQUFHLG9DQUFvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFUaHVtYlBhcmFtc091dHB1dCB9IGZyb20gJy4vS2FsdHVyYVRodW1iUGFyYW1zT3V0cHV0JztcbmltcG9ydCB7IEthbHR1cmFMaXN0UmVzcG9uc2UsIEthbHR1cmFMaXN0UmVzcG9uc2VBcmdzIH0gZnJvbSAnLi9LYWx0dXJhTGlzdFJlc3BvbnNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVGh1bWJQYXJhbXNPdXRwdXRMaXN0UmVzcG9uc2VBcmdzICBleHRlbmRzIEthbHR1cmFMaXN0UmVzcG9uc2VBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVRodW1iUGFyYW1zT3V0cHV0TGlzdFJlc3BvbnNlIGV4dGVuZHMgS2FsdHVyYUxpc3RSZXNwb25zZSB7XG5cbiAgICByZWFkb25seSBvYmplY3RzIDogS2FsdHVyYVRodW1iUGFyYW1zT3V0cHV0W107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFUaHVtYlBhcmFtc091dHB1dExpc3RSZXNwb25zZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9iamVjdHMgPT09ICd1bmRlZmluZWQnKSB0aGlzLm9iamVjdHMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVGh1bWJQYXJhbXNPdXRwdXRMaXN0UmVzcG9uc2UnIH0sXG5cdFx0XHRcdG9iamVjdHMgOiB7IHR5cGUgOiAnYScsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVRodW1iUGFyYW1zT3V0cHV0LCBzdWJUeXBlIDogJ0thbHR1cmFUaHVtYlBhcmFtc091dHB1dCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVRodW1iUGFyYW1zT3V0cHV0TGlzdFJlc3BvbnNlJ10gPSBLYWx0dXJhVGh1bWJQYXJhbXNPdXRwdXRMaXN0UmVzcG9uc2U7Il19