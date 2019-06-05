/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEmailNotificationFormat } from './KalturaEmailNotificationFormat';
import { KalturaEmailNotificationRecipientProvider } from './KalturaEmailNotificationRecipientProvider';
import { KalturaEmailNotificationTemplatePriority } from './KalturaEmailNotificationTemplatePriority';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaEventNotificationTemplate } from './KalturaEventNotificationTemplate';
/**
 * @record
 */
export function KalturaEmailNotificationTemplateArgs() { }
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.format;
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.subject;
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.body;
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.fromEmail;
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.fromName;
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.to;
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.cc;
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.bcc;
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.replyTo;
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.priority;
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.confirmReadingTo;
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.hostname;
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.messageID;
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.customHeaders;
var KalturaEmailNotificationTemplate = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEmailNotificationTemplate, _super);
    function KalturaEmailNotificationTemplate(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.customHeaders === 'undefined')
            _this.customHeaders = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaEmailNotificationTemplate.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEmailNotificationTemplate' },
            format: { type: 'es', subTypeConstructor: KalturaEmailNotificationFormat, subType: 'KalturaEmailNotificationFormat' },
            subject: { type: 's' },
            body: { type: 's' },
            fromEmail: { type: 's' },
            fromName: { type: 's' },
            to: { type: 'o', subTypeConstructor: KalturaEmailNotificationRecipientProvider, subType: 'KalturaEmailNotificationRecipientProvider' },
            cc: { type: 'o', subTypeConstructor: KalturaEmailNotificationRecipientProvider, subType: 'KalturaEmailNotificationRecipientProvider' },
            bcc: { type: 'o', subTypeConstructor: KalturaEmailNotificationRecipientProvider, subType: 'KalturaEmailNotificationRecipientProvider' },
            replyTo: { type: 'o', subTypeConstructor: KalturaEmailNotificationRecipientProvider, subType: 'KalturaEmailNotificationRecipientProvider' },
            priority: { type: 'en', subTypeConstructor: KalturaEmailNotificationTemplatePriority, subType: 'KalturaEmailNotificationTemplatePriority' },
            confirmReadingTo: { type: 's' },
            hostname: { type: 's' },
            messageID: { type: 's' },
            customHeaders: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' }
        });
        return result;
    };
    return KalturaEmailNotificationTemplate;
}(KalturaEventNotificationTemplate));
export { KalturaEmailNotificationTemplate };
if (false) {
    /** @type {?} */
    KalturaEmailNotificationTemplate.prototype.format;
    /** @type {?} */
    KalturaEmailNotificationTemplate.prototype.subject;
    /** @type {?} */
    KalturaEmailNotificationTemplate.prototype.body;
    /** @type {?} */
    KalturaEmailNotificationTemplate.prototype.fromEmail;
    /** @type {?} */
    KalturaEmailNotificationTemplate.prototype.fromName;
    /** @type {?} */
    KalturaEmailNotificationTemplate.prototype.to;
    /** @type {?} */
    KalturaEmailNotificationTemplate.prototype.cc;
    /** @type {?} */
    KalturaEmailNotificationTemplate.prototype.bcc;
    /** @type {?} */
    KalturaEmailNotificationTemplate.prototype.replyTo;
    /** @type {?} */
    KalturaEmailNotificationTemplate.prototype.priority;
    /** @type {?} */
    KalturaEmailNotificationTemplate.prototype.confirmReadingTo;
    /** @type {?} */
    KalturaEmailNotificationTemplate.prototype.hostname;
    /** @type {?} */
    KalturaEmailNotificationTemplate.prototype.messageID;
    /** @type {?} */
    KalturaEmailNotificationTemplate.prototype.customHeaders;
}
typesMappingStorage['KalturaEmailNotificationTemplate'] = KalturaEmailNotificationTemplate;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uVGVtcGxhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvblRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3hHLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0NBQWdDLEVBQXdDLE1BQU0sb0NBQW9DLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CNUgsSUFBQTtJQUFzRCw0REFBZ0M7SUFpQmxGLDBDQUFZLElBQTRDO1FBQXhELFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxhQUFhLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7O0tBQzFFOzs7O0lBRVMsdURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsa0NBQWtDLEVBQUU7WUFDckYsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw4QkFBOEIsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDekgsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHlDQUF5QyxFQUFFLE9BQU8sRUFBRywyQ0FBMkMsRUFBRTtZQUMxSSxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHlDQUF5QyxFQUFFLE9BQU8sRUFBRywyQ0FBMkMsRUFBRTtZQUMxSSxHQUFHLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHlDQUF5QyxFQUFFLE9BQU8sRUFBRywyQ0FBMkMsRUFBRTtZQUMzSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHlDQUF5QyxFQUFFLE9BQU8sRUFBRywyQ0FBMkMsRUFBRTtZQUMvSSxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHdDQUF3QyxFQUFFLE9BQU8sRUFBRywwQ0FBMEMsRUFBRTtZQUMvSSxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZUFBZSxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtTQUN4RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzJDQXpFTDtFQTBCc0QsZ0NBQWdDLEVBZ0RyRixDQUFBO0FBaERELDRDQWdEQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGtDQUFrQyxDQUFDLEdBQUcsZ0NBQWdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uRm9ybWF0IH0gZnJvbSAnLi9LYWx0dXJhRW1haWxOb3RpZmljYXRpb25Gb3JtYXQnO1xuaW1wb3J0IHsgS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50UHJvdmlkZXIgfSBmcm9tICcuL0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudFByb3ZpZGVyJztcbmltcG9ydCB7IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblRlbXBsYXRlUHJpb3JpdHkgfSBmcm9tICcuL0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvblRlbXBsYXRlUHJpb3JpdHknO1xuaW1wb3J0IHsgS2FsdHVyYUtleVZhbHVlIH0gZnJvbSAnLi9LYWx0dXJhS2V5VmFsdWUnO1xuaW1wb3J0IHsgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUsIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlQXJncyB9IGZyb20gJy4vS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblRlbXBsYXRlQXJncyAgZXh0ZW5kcyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZUFyZ3Mge1xuICAgIGZvcm1hdD8gOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25Gb3JtYXQ7XG5cdHN1YmplY3Q/IDogc3RyaW5nO1xuXHRib2R5PyA6IHN0cmluZztcblx0ZnJvbUVtYWlsPyA6IHN0cmluZztcblx0ZnJvbU5hbWU/IDogc3RyaW5nO1xuXHR0bz8gOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRQcm92aWRlcjtcblx0Y2M/IDogS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50UHJvdmlkZXI7XG5cdGJjYz8gOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRQcm92aWRlcjtcblx0cmVwbHlUbz8gOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRQcm92aWRlcjtcblx0cHJpb3JpdHk/IDogS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uVGVtcGxhdGVQcmlvcml0eTtcblx0Y29uZmlybVJlYWRpbmdUbz8gOiBzdHJpbmc7XG5cdGhvc3RuYW1lPyA6IHN0cmluZztcblx0bWVzc2FnZUlEPyA6IHN0cmluZztcblx0Y3VzdG9tSGVhZGVycz8gOiBLYWx0dXJhS2V5VmFsdWVbXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uVGVtcGxhdGUgZXh0ZW5kcyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZSB7XG5cbiAgICBmb3JtYXQgOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25Gb3JtYXQ7XG5cdHN1YmplY3QgOiBzdHJpbmc7XG5cdGJvZHkgOiBzdHJpbmc7XG5cdGZyb21FbWFpbCA6IHN0cmluZztcblx0ZnJvbU5hbWUgOiBzdHJpbmc7XG5cdHRvIDogS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50UHJvdmlkZXI7XG5cdGNjIDogS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50UHJvdmlkZXI7XG5cdGJjYyA6IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudFByb3ZpZGVyO1xuXHRyZXBseVRvIDogS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50UHJvdmlkZXI7XG5cdHByaW9yaXR5IDogS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uVGVtcGxhdGVQcmlvcml0eTtcblx0Y29uZmlybVJlYWRpbmdUbyA6IHN0cmluZztcblx0aG9zdG5hbWUgOiBzdHJpbmc7XG5cdG1lc3NhZ2VJRCA6IHN0cmluZztcblx0Y3VzdG9tSGVhZGVycyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25UZW1wbGF0ZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmN1c3RvbUhlYWRlcnMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmN1c3RvbUhlYWRlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRW1haWxOb3RpZmljYXRpb25UZW1wbGF0ZScgfSxcblx0XHRcdFx0Zm9ybWF0IDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uRm9ybWF0LCBzdWJUeXBlIDogJ0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvbkZvcm1hdCcgfSxcblx0XHRcdFx0c3ViamVjdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRib2R5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZyb21FbWFpbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmcm9tTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0byA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50UHJvdmlkZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50UHJvdmlkZXInIH0sXG5cdFx0XHRcdGNjIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRQcm92aWRlciwgc3ViVHlwZSA6ICdLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRQcm92aWRlcicgfSxcblx0XHRcdFx0YmNjIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRQcm92aWRlciwgc3ViVHlwZSA6ICdLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRQcm92aWRlcicgfSxcblx0XHRcdFx0cmVwbHlUbyA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50UHJvdmlkZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50UHJvdmlkZXInIH0sXG5cdFx0XHRcdHByaW9yaXR5IDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uVGVtcGxhdGVQcmlvcml0eSwgc3ViVHlwZSA6ICdLYWx0dXJhRW1haWxOb3RpZmljYXRpb25UZW1wbGF0ZVByaW9yaXR5JyB9LFxuXHRcdFx0XHRjb25maXJtUmVhZGluZ1RvIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGhvc3RuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1lc3NhZ2VJRCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjdXN0b21IZWFkZXJzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhS2V5VmFsdWUsIHN1YlR5cGUgOiAnS2FsdHVyYUtleVZhbHVlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRW1haWxOb3RpZmljYXRpb25UZW1wbGF0ZSddID0gS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uVGVtcGxhdGU7Il19