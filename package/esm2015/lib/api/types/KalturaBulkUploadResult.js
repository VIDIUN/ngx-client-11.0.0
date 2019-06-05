/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadResultStatus } from './KalturaBulkUploadResultStatus';
import { KalturaBulkUploadAction } from './KalturaBulkUploadAction';
import { KalturaBulkUploadObjectType } from './KalturaBulkUploadObjectType';
import { KalturaBulkUploadPluginData } from './KalturaBulkUploadPluginData';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaBulkUploadResultArgs() { }
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.bulkUploadJobId;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.lineIndex;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.partnerId;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.status;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.action;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.objectId;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.objectStatus;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.bulkUploadResultObjectType;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.rowData;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.partnerData;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.objectErrorDescription;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.pluginsData;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.errorDescription;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.errorCode;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.errorType;
export class KalturaBulkUploadResult extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.pluginsData === 'undefined')
            this.pluginsData = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBulkUploadResult' },
            id: { type: 'n', readOnly: true },
            bulkUploadJobId: { type: 'n' },
            lineIndex: { type: 'n' },
            partnerId: { type: 'n' },
            status: { type: 'es', subTypeConstructor: KalturaBulkUploadResultStatus, subType: 'KalturaBulkUploadResultStatus' },
            action: { type: 'es', subTypeConstructor: KalturaBulkUploadAction, subType: 'KalturaBulkUploadAction' },
            objectId: { type: 's' },
            objectStatus: { type: 'n' },
            bulkUploadResultObjectType: { type: 'es', subTypeConstructor: KalturaBulkUploadObjectType, subType: 'KalturaBulkUploadObjectType' },
            rowData: { type: 's' },
            partnerData: { type: 's' },
            objectErrorDescription: { type: 's' },
            pluginsData: { type: 'a', subTypeConstructor: KalturaBulkUploadPluginData, subType: 'KalturaBulkUploadPluginData' },
            errorDescription: { type: 's' },
            errorCode: { type: 's' },
            errorType: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBulkUploadResult.prototype.id;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.bulkUploadJobId;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.lineIndex;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.partnerId;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.status;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.action;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.objectId;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.objectStatus;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.bulkUploadResultObjectType;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.rowData;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.partnerData;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.objectErrorDescription;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.pluginsData;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.errorDescription;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.errorCode;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.errorType;
}
typesMappingStorage['KalturaBulkUploadResult'] = KalturaBulkUploadResult;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFCdWxrVXBsb2FkUmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCbEYsTUFBTSw4QkFBK0IsU0FBUSxpQkFBaUI7Ozs7SUFtQjFELFlBQVksSUFBbUM7UUFFM0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0tBQ3RFOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtZQUM1RSxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDcEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw2QkFBNkIsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7WUFDdkgsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx1QkFBdUIsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDM0csUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLDBCQUEwQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywyQkFBMkIsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7WUFDdkksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDJCQUEyQixFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUN2SCxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2pCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLHVCQUF1QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0U3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhQnVsa1VwbG9hZFJlc3VsdFN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhQnVsa1VwbG9hZEFjdGlvbiB9IGZyb20gJy4vS2FsdHVyYUJ1bGtVcGxvYWRBY3Rpb24nO1xuaW1wb3J0IHsgS2FsdHVyYUJ1bGtVcGxvYWRPYmplY3RUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQnVsa1VwbG9hZE9iamVjdFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUJ1bGtVcGxvYWRQbHVnaW5EYXRhIH0gZnJvbSAnLi9LYWx0dXJhQnVsa1VwbG9hZFBsdWdpbkRhdGEnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0QXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGJ1bGtVcGxvYWRKb2JJZD8gOiBudW1iZXI7XG5cdGxpbmVJbmRleD8gOiBudW1iZXI7XG5cdHBhcnRuZXJJZD8gOiBudW1iZXI7XG5cdHN0YXR1cz8gOiBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdFN0YXR1cztcblx0YWN0aW9uPyA6IEthbHR1cmFCdWxrVXBsb2FkQWN0aW9uO1xuXHRvYmplY3RJZD8gOiBzdHJpbmc7XG5cdG9iamVjdFN0YXR1cz8gOiBudW1iZXI7XG5cdGJ1bGtVcGxvYWRSZXN1bHRPYmplY3RUeXBlPyA6IEthbHR1cmFCdWxrVXBsb2FkT2JqZWN0VHlwZTtcblx0cm93RGF0YT8gOiBzdHJpbmc7XG5cdHBhcnRuZXJEYXRhPyA6IHN0cmluZztcblx0b2JqZWN0RXJyb3JEZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdHBsdWdpbnNEYXRhPyA6IEthbHR1cmFCdWxrVXBsb2FkUGx1Z2luRGF0YVtdO1xuXHRlcnJvckRlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0ZXJyb3JDb2RlPyA6IHN0cmluZztcblx0ZXJyb3JUeXBlPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHQgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0YnVsa1VwbG9hZEpvYklkIDogbnVtYmVyO1xuXHRsaW5lSW5kZXggOiBudW1iZXI7XG5cdHBhcnRuZXJJZCA6IG51bWJlcjtcblx0c3RhdHVzIDogS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRTdGF0dXM7XG5cdGFjdGlvbiA6IEthbHR1cmFCdWxrVXBsb2FkQWN0aW9uO1xuXHRvYmplY3RJZCA6IHN0cmluZztcblx0b2JqZWN0U3RhdHVzIDogbnVtYmVyO1xuXHRidWxrVXBsb2FkUmVzdWx0T2JqZWN0VHlwZSA6IEthbHR1cmFCdWxrVXBsb2FkT2JqZWN0VHlwZTtcblx0cm93RGF0YSA6IHN0cmluZztcblx0cGFydG5lckRhdGEgOiBzdHJpbmc7XG5cdG9iamVjdEVycm9yRGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cdHBsdWdpbnNEYXRhIDogS2FsdHVyYUJ1bGtVcGxvYWRQbHVnaW5EYXRhW107XG5cdGVycm9yRGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cdGVycm9yQ29kZSA6IHN0cmluZztcblx0ZXJyb3JUeXBlIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnBsdWdpbnNEYXRhID09PSAndW5kZWZpbmVkJykgdGhpcy5wbHVnaW5zRGF0YSA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFCdWxrVXBsb2FkUmVzdWx0JyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGJ1bGtVcGxvYWRKb2JJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRsaW5lSW5kZXggOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHN0YXR1cyA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0U3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFCdWxrVXBsb2FkUmVzdWx0U3RhdHVzJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQnVsa1VwbG9hZEFjdGlvbiwgc3ViVHlwZSA6ICdLYWx0dXJhQnVsa1VwbG9hZEFjdGlvbicgfSxcblx0XHRcdFx0b2JqZWN0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b2JqZWN0U3RhdHVzIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGJ1bGtVcGxvYWRSZXN1bHRPYmplY3RUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJ1bGtVcGxvYWRPYmplY3RUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFCdWxrVXBsb2FkT2JqZWN0VHlwZScgfSxcblx0XHRcdFx0cm93RGF0YSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVyRGF0YSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRvYmplY3RFcnJvckRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBsdWdpbnNEYXRhIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQnVsa1VwbG9hZFBsdWdpbkRhdGEsIHN1YlR5cGUgOiAnS2FsdHVyYUJ1bGtVcGxvYWRQbHVnaW5EYXRhJyB9LFxuXHRcdFx0XHRlcnJvckRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVycm9yQ29kZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlcnJvclR5cGUgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHQnXSA9IEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0OyJdfQ==