/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaMailType } from './KalturaMailType';
import { KalturaMailJobStatus } from './KalturaMailJobStatus';
import { KalturaLanguageCode } from './KalturaLanguageCode';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaMailJobDataArgs() { }
/** @type {?|undefined} */
KalturaMailJobDataArgs.prototype.mailType;
/** @type {?|undefined} */
KalturaMailJobDataArgs.prototype.mailPriority;
/** @type {?|undefined} */
KalturaMailJobDataArgs.prototype.status;
/** @type {?|undefined} */
KalturaMailJobDataArgs.prototype.recipientName;
/** @type {?|undefined} */
KalturaMailJobDataArgs.prototype.recipientEmail;
/** @type {?|undefined} */
KalturaMailJobDataArgs.prototype.recipientId;
/** @type {?|undefined} */
KalturaMailJobDataArgs.prototype.fromName;
/** @type {?|undefined} */
KalturaMailJobDataArgs.prototype.fromEmail;
/** @type {?|undefined} */
KalturaMailJobDataArgs.prototype.bodyParams;
/** @type {?|undefined} */
KalturaMailJobDataArgs.prototype.subjectParams;
/** @type {?|undefined} */
KalturaMailJobDataArgs.prototype.templatePath;
/** @type {?|undefined} */
KalturaMailJobDataArgs.prototype.language;
/** @type {?|undefined} */
KalturaMailJobDataArgs.prototype.campaignId;
/** @type {?|undefined} */
KalturaMailJobDataArgs.prototype.minSendDate;
/** @type {?|undefined} */
KalturaMailJobDataArgs.prototype.isHtml;
/** @type {?|undefined} */
KalturaMailJobDataArgs.prototype.separator;
var KalturaMailJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaMailJobData, _super);
    function KalturaMailJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaMailJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaMailJobData' },
            mailType: { type: 'es', subTypeConstructor: KalturaMailType, subType: 'KalturaMailType' },
            mailPriority: { type: 'n' },
            status: { type: 'en', subTypeConstructor: KalturaMailJobStatus, subType: 'KalturaMailJobStatus' },
            recipientName: { type: 's' },
            recipientEmail: { type: 's' },
            recipientId: { type: 'n' },
            fromName: { type: 's' },
            fromEmail: { type: 's' },
            bodyParams: { type: 's' },
            subjectParams: { type: 's' },
            templatePath: { type: 's' },
            language: { type: 'es', subTypeConstructor: KalturaLanguageCode, subType: 'KalturaLanguageCode' },
            campaignId: { type: 'n' },
            minSendDate: { type: 'n' },
            isHtml: { type: 'b' },
            separator: { type: 's' }
        });
        return result;
    };
    return KalturaMailJobData;
}(KalturaJobData));
export { KalturaMailJobData };
if (false) {
    /** @type {?} */
    KalturaMailJobData.prototype.mailType;
    /** @type {?} */
    KalturaMailJobData.prototype.mailPriority;
    /** @type {?} */
    KalturaMailJobData.prototype.status;
    /** @type {?} */
    KalturaMailJobData.prototype.recipientName;
    /** @type {?} */
    KalturaMailJobData.prototype.recipientEmail;
    /** @type {?} */
    KalturaMailJobData.prototype.recipientId;
    /** @type {?} */
    KalturaMailJobData.prototype.fromName;
    /** @type {?} */
    KalturaMailJobData.prototype.fromEmail;
    /** @type {?} */
    KalturaMailJobData.prototype.bodyParams;
    /** @type {?} */
    KalturaMailJobData.prototype.subjectParams;
    /** @type {?} */
    KalturaMailJobData.prototype.templatePath;
    /** @type {?} */
    KalturaMailJobData.prototype.language;
    /** @type {?} */
    KalturaMailJobData.prototype.campaignId;
    /** @type {?} */
    KalturaMailJobData.prototype.minSendDate;
    /** @type {?} */
    KalturaMailJobData.prototype.isHtml;
    /** @type {?} */
    KalturaMailJobData.prototype.separator;
}
typesMappingStorage['KalturaMailJobData'] = KalturaMailJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1haWxKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTWFpbEpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQnRFLElBQUE7SUFBd0MsOENBQWM7SUFtQmxELDRCQUFZLElBQThCO2VBRXRDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMseUNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDdkUsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxlQUFlLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQzdGLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxvQkFBb0IsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDckcsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsbUJBQW1CLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQ3JHLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDakIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs2QkE3RUw7RUEyQndDLGNBQWMsRUFtRHJELENBQUE7QUFuREQsOEJBbURDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG9CQUFvQixDQUFDLEdBQUcsa0JBQWtCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU1haWxUeXBlIH0gZnJvbSAnLi9LYWx0dXJhTWFpbFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYU1haWxKb2JTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFNYWlsSm9iU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFMYW5ndWFnZUNvZGUgfSBmcm9tICcuL0thbHR1cmFMYW5ndWFnZUNvZGUnO1xuaW1wb3J0IHsgS2FsdHVyYUpvYkRhdGEsIEthbHR1cmFKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUpvYkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFNYWlsSm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGFBcmdzIHtcbiAgICBtYWlsVHlwZT8gOiBLYWx0dXJhTWFpbFR5cGU7XG5cdG1haWxQcmlvcml0eT8gOiBudW1iZXI7XG5cdHN0YXR1cz8gOiBLYWx0dXJhTWFpbEpvYlN0YXR1cztcblx0cmVjaXBpZW50TmFtZT8gOiBzdHJpbmc7XG5cdHJlY2lwaWVudEVtYWlsPyA6IHN0cmluZztcblx0cmVjaXBpZW50SWQ/IDogbnVtYmVyO1xuXHRmcm9tTmFtZT8gOiBzdHJpbmc7XG5cdGZyb21FbWFpbD8gOiBzdHJpbmc7XG5cdGJvZHlQYXJhbXM/IDogc3RyaW5nO1xuXHRzdWJqZWN0UGFyYW1zPyA6IHN0cmluZztcblx0dGVtcGxhdGVQYXRoPyA6IHN0cmluZztcblx0bGFuZ3VhZ2U/IDogS2FsdHVyYUxhbmd1YWdlQ29kZTtcblx0Y2FtcGFpZ25JZD8gOiBudW1iZXI7XG5cdG1pblNlbmREYXRlPyA6IG51bWJlcjtcblx0aXNIdG1sPyA6IGJvb2xlYW47XG5cdHNlcGFyYXRvcj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFNYWlsSm9iRGF0YSBleHRlbmRzIEthbHR1cmFKb2JEYXRhIHtcblxuICAgIG1haWxUeXBlIDogS2FsdHVyYU1haWxUeXBlO1xuXHRtYWlsUHJpb3JpdHkgOiBudW1iZXI7XG5cdHN0YXR1cyA6IEthbHR1cmFNYWlsSm9iU3RhdHVzO1xuXHRyZWNpcGllbnROYW1lIDogc3RyaW5nO1xuXHRyZWNpcGllbnRFbWFpbCA6IHN0cmluZztcblx0cmVjaXBpZW50SWQgOiBudW1iZXI7XG5cdGZyb21OYW1lIDogc3RyaW5nO1xuXHRmcm9tRW1haWwgOiBzdHJpbmc7XG5cdGJvZHlQYXJhbXMgOiBzdHJpbmc7XG5cdHN1YmplY3RQYXJhbXMgOiBzdHJpbmc7XG5cdHRlbXBsYXRlUGF0aCA6IHN0cmluZztcblx0bGFuZ3VhZ2UgOiBLYWx0dXJhTGFuZ3VhZ2VDb2RlO1xuXHRjYW1wYWlnbklkIDogbnVtYmVyO1xuXHRtaW5TZW5kRGF0ZSA6IG51bWJlcjtcblx0aXNIdG1sIDogYm9vbGVhbjtcblx0c2VwYXJhdG9yIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTWFpbEpvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYU1haWxKb2JEYXRhJyB9LFxuXHRcdFx0XHRtYWlsVHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFNYWlsVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhTWFpbFR5cGUnIH0sXG5cdFx0XHRcdG1haWxQcmlvcml0eSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWFpbEpvYlN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhTWFpbEpvYlN0YXR1cycgfSxcblx0XHRcdFx0cmVjaXBpZW50TmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZWNpcGllbnRFbWFpbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZWNpcGllbnRJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRmcm9tTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmcm9tRW1haWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Ym9keVBhcmFtcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdWJqZWN0UGFyYW1zIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRlbXBsYXRlUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRsYW5ndWFnZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFMYW5ndWFnZUNvZGUsIHN1YlR5cGUgOiAnS2FsdHVyYUxhbmd1YWdlQ29kZScgfSxcblx0XHRcdFx0Y2FtcGFpZ25JZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRtaW5TZW5kRGF0ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpc0h0bWwgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0c2VwYXJhdG9yIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFNYWlsSm9iRGF0YSddID0gS2FsdHVyYU1haWxKb2JEYXRhOyJdfQ==