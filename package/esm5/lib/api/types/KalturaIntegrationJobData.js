/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaIntegrationProviderType } from './KalturaIntegrationProviderType';
import { KalturaIntegrationJobProviderData } from './KalturaIntegrationJobProviderData';
import { KalturaIntegrationTriggerType } from './KalturaIntegrationTriggerType';
import { KalturaIntegrationJobTriggerData } from './KalturaIntegrationJobTriggerData';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaIntegrationJobDataArgs() { }
/** @type {?|undefined} */
KalturaIntegrationJobDataArgs.prototype.providerType;
/** @type {?|undefined} */
KalturaIntegrationJobDataArgs.prototype.providerData;
/** @type {?|undefined} */
KalturaIntegrationJobDataArgs.prototype.triggerType;
/** @type {?|undefined} */
KalturaIntegrationJobDataArgs.prototype.triggerData;
var KalturaIntegrationJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaIntegrationJobData, _super);
    function KalturaIntegrationJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaIntegrationJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaIntegrationJobData' },
            callbackNotificationUrl: { type: 's', readOnly: true },
            providerType: { type: 'es', subTypeConstructor: KalturaIntegrationProviderType, subType: 'KalturaIntegrationProviderType' },
            providerData: { type: 'o', subTypeConstructor: KalturaIntegrationJobProviderData, subType: 'KalturaIntegrationJobProviderData' },
            triggerType: { type: 'es', subTypeConstructor: KalturaIntegrationTriggerType, subType: 'KalturaIntegrationTriggerType' },
            triggerData: { type: 'o', subTypeConstructor: KalturaIntegrationJobTriggerData, subType: 'KalturaIntegrationJobTriggerData' }
        });
        return result;
    };
    return KalturaIntegrationJobData;
}(KalturaJobData));
export { KalturaIntegrationJobData };
if (false) {
    /** @type {?} */
    KalturaIntegrationJobData.prototype.callbackNotificationUrl;
    /** @type {?} */
    KalturaIntegrationJobData.prototype.providerType;
    /** @type {?} */
    KalturaIntegrationJobData.prototype.providerData;
    /** @type {?} */
    KalturaIntegrationJobData.prototype.triggerType;
    /** @type {?} */
    KalturaIntegrationJobData.prototype.triggerData;
}
typesMappingStorage['KalturaIntegrationJobData'] = KalturaIntegrationJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUludGVncmF0aW9uSm9iRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUludGVncmF0aW9uSm9iRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLGtCQUFrQixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVXRFLElBQUE7SUFBK0MscURBQWM7SUFRekQsbUNBQVksSUFBcUM7ZUFFN0Msa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxnREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUM5RSx1QkFBdUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUN6RCxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDhCQUE4QixFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUMvSCxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGlDQUFpQyxFQUFFLE9BQU8sRUFBRyxtQ0FBbUMsRUFBRTtZQUNwSSxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDZCQUE2QixFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUM1SCxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGdDQUFnQyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtTQUN4SCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO29DQTVDTDtFQWdCK0MsY0FBYyxFQTZCNUQsQ0FBQTtBQTdCRCxxQ0E2QkM7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFJbnRlZ3JhdGlvblByb3ZpZGVyVHlwZSB9IGZyb20gJy4vS2FsdHVyYUludGVncmF0aW9uUHJvdmlkZXJUeXBlJztcbmltcG9ydCB7IEthbHR1cmFJbnRlZ3JhdGlvbkpvYlByb3ZpZGVyRGF0YSB9IGZyb20gJy4vS2FsdHVyYUludGVncmF0aW9uSm9iUHJvdmlkZXJEYXRhJztcbmltcG9ydCB7IEthbHR1cmFJbnRlZ3JhdGlvblRyaWdnZXJUeXBlIH0gZnJvbSAnLi9LYWx0dXJhSW50ZWdyYXRpb25UcmlnZ2VyVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhSW50ZWdyYXRpb25Kb2JUcmlnZ2VyRGF0YSB9IGZyb20gJy4vS2FsdHVyYUludGVncmF0aW9uSm9iVHJpZ2dlckRhdGEnO1xuaW1wb3J0IHsgS2FsdHVyYUpvYkRhdGEsIEthbHR1cmFKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUpvYkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFJbnRlZ3JhdGlvbkpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFKb2JEYXRhQXJncyB7XG4gICAgcHJvdmlkZXJUeXBlPyA6IEthbHR1cmFJbnRlZ3JhdGlvblByb3ZpZGVyVHlwZTtcblx0cHJvdmlkZXJEYXRhPyA6IEthbHR1cmFJbnRlZ3JhdGlvbkpvYlByb3ZpZGVyRGF0YTtcblx0dHJpZ2dlclR5cGU/IDogS2FsdHVyYUludGVncmF0aW9uVHJpZ2dlclR5cGU7XG5cdHRyaWdnZXJEYXRhPyA6IEthbHR1cmFJbnRlZ3JhdGlvbkpvYlRyaWdnZXJEYXRhO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhSW50ZWdyYXRpb25Kb2JEYXRhIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGEge1xuXG4gICAgcmVhZG9ubHkgY2FsbGJhY2tOb3RpZmljYXRpb25VcmwgOiBzdHJpbmc7XG5cdHByb3ZpZGVyVHlwZSA6IEthbHR1cmFJbnRlZ3JhdGlvblByb3ZpZGVyVHlwZTtcblx0cHJvdmlkZXJEYXRhIDogS2FsdHVyYUludGVncmF0aW9uSm9iUHJvdmlkZXJEYXRhO1xuXHR0cmlnZ2VyVHlwZSA6IEthbHR1cmFJbnRlZ3JhdGlvblRyaWdnZXJUeXBlO1xuXHR0cmlnZ2VyRGF0YSA6IEthbHR1cmFJbnRlZ3JhdGlvbkpvYlRyaWdnZXJEYXRhO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhSW50ZWdyYXRpb25Kb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFJbnRlZ3JhdGlvbkpvYkRhdGEnIH0sXG5cdFx0XHRcdGNhbGxiYWNrTm90aWZpY2F0aW9uVXJsIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cHJvdmlkZXJUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUludGVncmF0aW9uUHJvdmlkZXJUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFJbnRlZ3JhdGlvblByb3ZpZGVyVHlwZScgfSxcblx0XHRcdFx0cHJvdmlkZXJEYXRhIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhSW50ZWdyYXRpb25Kb2JQcm92aWRlckRhdGEsIHN1YlR5cGUgOiAnS2FsdHVyYUludGVncmF0aW9uSm9iUHJvdmlkZXJEYXRhJyB9LFxuXHRcdFx0XHR0cmlnZ2VyVHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFJbnRlZ3JhdGlvblRyaWdnZXJUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFJbnRlZ3JhdGlvblRyaWdnZXJUeXBlJyB9LFxuXHRcdFx0XHR0cmlnZ2VyRGF0YSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUludGVncmF0aW9uSm9iVHJpZ2dlckRhdGEsIHN1YlR5cGUgOiAnS2FsdHVyYUludGVncmF0aW9uSm9iVHJpZ2dlckRhdGEnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFJbnRlZ3JhdGlvbkpvYkRhdGEnXSA9IEthbHR1cmFJbnRlZ3JhdGlvbkpvYkRhdGE7Il19