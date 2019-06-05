/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDataCenterContentResource } from './KalturaDataCenterContentResource';
import { KalturaOperationAttributes } from './KalturaOperationAttributes';
/**
 * @record
 */
export function KalturaConcatAttributesArgs() { }
/** @type {?|undefined} */
KalturaConcatAttributesArgs.prototype.resource;
export class KalturaConcatAttributes extends KalturaOperationAttributes {
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
            objectType: { type: 'c', default: 'KalturaConcatAttributes' },
            resource: { type: 'o', subTypeConstructor: KalturaDataCenterContentResource, subType: 'KalturaDataCenterContentResource' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaConcatAttributes.prototype.resource;
}
typesMappingStorage['KalturaConcatAttributes'] = KalturaConcatAttributes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbmNhdEF0dHJpYnV0ZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDb25jYXRBdHRyaWJ1dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEYsT0FBTyxFQUFFLDBCQUEwQixFQUFrQyxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7O0FBTzFHLE1BQU0sOEJBQStCLFNBQVEsMEJBQTBCOzs7O0lBSW5FLFlBQVksSUFBbUM7UUFFM0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzVFLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZ0NBQWdDLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1NBQ3JILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLHVCQUF1QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEYXRhQ2VudGVyQ29udGVudFJlc291cmNlIH0gZnJvbSAnLi9LYWx0dXJhRGF0YUNlbnRlckNvbnRlbnRSZXNvdXJjZSc7XG5pbXBvcnQgeyBLYWx0dXJhT3BlcmF0aW9uQXR0cmlidXRlcywgS2FsdHVyYU9wZXJhdGlvbkF0dHJpYnV0ZXNBcmdzIH0gZnJvbSAnLi9LYWx0dXJhT3BlcmF0aW9uQXR0cmlidXRlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNvbmNhdEF0dHJpYnV0ZXNBcmdzICBleHRlbmRzIEthbHR1cmFPcGVyYXRpb25BdHRyaWJ1dGVzQXJncyB7XG4gICAgcmVzb3VyY2U/IDogS2FsdHVyYURhdGFDZW50ZXJDb250ZW50UmVzb3VyY2U7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDb25jYXRBdHRyaWJ1dGVzIGV4dGVuZHMgS2FsdHVyYU9wZXJhdGlvbkF0dHJpYnV0ZXMge1xuXG4gICAgcmVzb3VyY2UgOiBLYWx0dXJhRGF0YUNlbnRlckNvbnRlbnRSZXNvdXJjZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNvbmNhdEF0dHJpYnV0ZXNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNvbmNhdEF0dHJpYnV0ZXMnIH0sXG5cdFx0XHRcdHJlc291cmNlIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGF0YUNlbnRlckNvbnRlbnRSZXNvdXJjZSwgc3ViVHlwZSA6ICdLYWx0dXJhRGF0YUNlbnRlckNvbnRlbnRSZXNvdXJjZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNvbmNhdEF0dHJpYnV0ZXMnXSA9IEthbHR1cmFDb25jYXRBdHRyaWJ1dGVzOyJdfQ==