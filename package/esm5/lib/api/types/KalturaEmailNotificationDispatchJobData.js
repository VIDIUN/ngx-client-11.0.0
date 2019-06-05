/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEmailNotificationRecipientJobData } from './KalturaEmailNotificationRecipientJobData';
import { KalturaEmailNotificationTemplatePriority } from './KalturaEmailNotificationTemplatePriority';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaEventNotificationDispatchJobData } from './KalturaEventNotificationDispatchJobData';
/**
 * @record
 */
export function KalturaEmailNotificationDispatchJobDataArgs() { }
/** @type {?|undefined} */
KalturaEmailNotificationDispatchJobDataArgs.prototype.fromEmail;
/** @type {?|undefined} */
KalturaEmailNotificationDispatchJobDataArgs.prototype.fromName;
/** @type {?|undefined} */
KalturaEmailNotificationDispatchJobDataArgs.prototype.to;
/** @type {?|undefined} */
KalturaEmailNotificationDispatchJobDataArgs.prototype.cc;
/** @type {?|undefined} */
KalturaEmailNotificationDispatchJobDataArgs.prototype.bcc;
/** @type {?|undefined} */
KalturaEmailNotificationDispatchJobDataArgs.prototype.replyTo;
/** @type {?|undefined} */
KalturaEmailNotificationDispatchJobDataArgs.prototype.priority;
/** @type {?|undefined} */
KalturaEmailNotificationDispatchJobDataArgs.prototype.confirmReadingTo;
/** @type {?|undefined} */
KalturaEmailNotificationDispatchJobDataArgs.prototype.hostname;
/** @type {?|undefined} */
KalturaEmailNotificationDispatchJobDataArgs.prototype.messageID;
/** @type {?|undefined} */
KalturaEmailNotificationDispatchJobDataArgs.prototype.customHeaders;
var KalturaEmailNotificationDispatchJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEmailNotificationDispatchJobData, _super);
    function KalturaEmailNotificationDispatchJobData(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.customHeaders === 'undefined')
            _this.customHeaders = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaEmailNotificationDispatchJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEmailNotificationDispatchJobData' },
            fromEmail: { type: 's' },
            fromName: { type: 's' },
            to: { type: 'o', subTypeConstructor: KalturaEmailNotificationRecipientJobData, subType: 'KalturaEmailNotificationRecipientJobData' },
            cc: { type: 'o', subTypeConstructor: KalturaEmailNotificationRecipientJobData, subType: 'KalturaEmailNotificationRecipientJobData' },
            bcc: { type: 'o', subTypeConstructor: KalturaEmailNotificationRecipientJobData, subType: 'KalturaEmailNotificationRecipientJobData' },
            replyTo: { type: 'o', subTypeConstructor: KalturaEmailNotificationRecipientJobData, subType: 'KalturaEmailNotificationRecipientJobData' },
            priority: { type: 'en', subTypeConstructor: KalturaEmailNotificationTemplatePriority, subType: 'KalturaEmailNotificationTemplatePriority' },
            confirmReadingTo: { type: 's' },
            hostname: { type: 's' },
            messageID: { type: 's' },
            customHeaders: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' }
        });
        return result;
    };
    return KalturaEmailNotificationDispatchJobData;
}(KalturaEventNotificationDispatchJobData));
export { KalturaEmailNotificationDispatchJobData };
if (false) {
    /** @type {?} */
    KalturaEmailNotificationDispatchJobData.prototype.fromEmail;
    /** @type {?} */
    KalturaEmailNotificationDispatchJobData.prototype.fromName;
    /** @type {?} */
    KalturaEmailNotificationDispatchJobData.prototype.to;
    /** @type {?} */
    KalturaEmailNotificationDispatchJobData.prototype.cc;
    /** @type {?} */
    KalturaEmailNotificationDispatchJobData.prototype.bcc;
    /** @type {?} */
    KalturaEmailNotificationDispatchJobData.prototype.replyTo;
    /** @type {?} */
    KalturaEmailNotificationDispatchJobData.prototype.priority;
    /** @type {?} */
    KalturaEmailNotificationDispatchJobData.prototype.confirmReadingTo;
    /** @type {?} */
    KalturaEmailNotificationDispatchJobData.prototype.hostname;
    /** @type {?} */
    KalturaEmailNotificationDispatchJobData.prototype.messageID;
    /** @type {?} */
    KalturaEmailNotificationDispatchJobData.prototype.customHeaders;
}
typesMappingStorage['KalturaEmailNotificationDispatchJobData'] = KalturaEmailNotificationDispatchJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRW1haWxOb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEcsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSx1Q0FBdUMsRUFBK0MsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJqSixJQUFBO0lBQTZELG1FQUF1QztJQWNoRyxpREFBWSxJQUFtRDtRQUEvRCxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsYUFBYSxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDOztLQUMxRTs7OztJQUVTLDhEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1lBQzVGLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHdDQUF3QyxFQUFFLE9BQU8sRUFBRywwQ0FBMEMsRUFBRTtZQUN4SSxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHdDQUF3QyxFQUFFLE9BQU8sRUFBRywwQ0FBMEMsRUFBRTtZQUN4SSxHQUFHLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHdDQUF3QyxFQUFFLE9BQU8sRUFBRywwQ0FBMEMsRUFBRTtZQUN6SSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHdDQUF3QyxFQUFFLE9BQU8sRUFBRywwQ0FBMEMsRUFBRTtZQUM3SSxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHdDQUF3QyxFQUFFLE9BQU8sRUFBRywwQ0FBMEMsRUFBRTtZQUMvSSxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZUFBZSxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtTQUN4RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2tEQS9ETDtFQXNCNkQsdUNBQXVDLEVBMENuRyxDQUFBO0FBMUNELG1EQTBDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHlDQUF5QyxDQUFDLEdBQUcsdUNBQXVDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50Sm9iRGF0YSB9IGZyb20gJy4vS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50Sm9iRGF0YSc7XG5pbXBvcnQgeyBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25UZW1wbGF0ZVByaW9yaXR5IH0gZnJvbSAnLi9LYWx0dXJhRW1haWxOb3RpZmljYXRpb25UZW1wbGF0ZVByaW9yaXR5JztcbmltcG9ydCB7IEthbHR1cmFLZXlWYWx1ZSB9IGZyb20gJy4vS2FsdHVyYUtleVZhbHVlJztcbmltcG9ydCB7IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvbkRpc3BhdGNoSm9iRGF0YSwgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvbkRpc3BhdGNoSm9iRGF0YUFyZ3Mge1xuICAgIGZyb21FbWFpbD8gOiBzdHJpbmc7XG5cdGZyb21OYW1lPyA6IHN0cmluZztcblx0dG8/IDogS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50Sm9iRGF0YTtcblx0Y2M/IDogS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50Sm9iRGF0YTtcblx0YmNjPyA6IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudEpvYkRhdGE7XG5cdHJlcGx5VG8/IDogS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50Sm9iRGF0YTtcblx0cHJpb3JpdHk/IDogS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uVGVtcGxhdGVQcmlvcml0eTtcblx0Y29uZmlybVJlYWRpbmdUbz8gOiBzdHJpbmc7XG5cdGhvc3RuYW1lPyA6IHN0cmluZztcblx0bWVzc2FnZUlEPyA6IHN0cmluZztcblx0Y3VzdG9tSGVhZGVycz8gOiBLYWx0dXJhS2V5VmFsdWVbXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhIGV4dGVuZHMgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhIHtcblxuICAgIGZyb21FbWFpbCA6IHN0cmluZztcblx0ZnJvbU5hbWUgOiBzdHJpbmc7XG5cdHRvIDogS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50Sm9iRGF0YTtcblx0Y2MgOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRKb2JEYXRhO1xuXHRiY2MgOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRKb2JEYXRhO1xuXHRyZXBseVRvIDogS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50Sm9iRGF0YTtcblx0cHJpb3JpdHkgOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25UZW1wbGF0ZVByaW9yaXR5O1xuXHRjb25maXJtUmVhZGluZ1RvIDogc3RyaW5nO1xuXHRob3N0bmFtZSA6IHN0cmluZztcblx0bWVzc2FnZUlEIDogc3RyaW5nO1xuXHRjdXN0b21IZWFkZXJzIDogS2FsdHVyYUtleVZhbHVlW107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvbkRpc3BhdGNoSm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmN1c3RvbUhlYWRlcnMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmN1c3RvbUhlYWRlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRW1haWxOb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGEnIH0sXG5cdFx0XHRcdGZyb21FbWFpbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmcm9tTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0byA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50Sm9iRGF0YSwgc3ViVHlwZSA6ICdLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRKb2JEYXRhJyB9LFxuXHRcdFx0XHRjYyA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50Sm9iRGF0YSwgc3ViVHlwZSA6ICdLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRKb2JEYXRhJyB9LFxuXHRcdFx0XHRiY2MgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudEpvYkRhdGEsIHN1YlR5cGUgOiAnS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50Sm9iRGF0YScgfSxcblx0XHRcdFx0cmVwbHlUbyA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50Sm9iRGF0YSwgc3ViVHlwZSA6ICdLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRKb2JEYXRhJyB9LFxuXHRcdFx0XHRwcmlvcml0eSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblRlbXBsYXRlUHJpb3JpdHksIHN1YlR5cGUgOiAnS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uVGVtcGxhdGVQcmlvcml0eScgfSxcblx0XHRcdFx0Y29uZmlybVJlYWRpbmdUbyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRob3N0bmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtZXNzYWdlSUQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3VzdG9tSGVhZGVycyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUtleVZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFLZXlWYWx1ZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhJ10gPSBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGE7Il19