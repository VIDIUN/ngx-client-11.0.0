/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaMailJobData extends KalturaJobData {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1haWxKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTWFpbEpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCdEUsTUFBTSx5QkFBMEIsU0FBUSxjQUFjOzs7O0lBbUJsRCxZQUFZLElBQThCO1FBRXRDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUN2RSxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDN0YsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG9CQUFvQixFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtZQUNyRyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxtQkFBbUIsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7WUFDckcsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNqQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTWFpbFR5cGUgfSBmcm9tICcuL0thbHR1cmFNYWlsVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhTWFpbEpvYlN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYU1haWxKb2JTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYUxhbmd1YWdlQ29kZSB9IGZyb20gJy4vS2FsdHVyYUxhbmd1YWdlQ29kZSc7XG5pbXBvcnQgeyBLYWx0dXJhSm9iRGF0YSwgS2FsdHVyYUpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYU1haWxKb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhSm9iRGF0YUFyZ3Mge1xuICAgIG1haWxUeXBlPyA6IEthbHR1cmFNYWlsVHlwZTtcblx0bWFpbFByaW9yaXR5PyA6IG51bWJlcjtcblx0c3RhdHVzPyA6IEthbHR1cmFNYWlsSm9iU3RhdHVzO1xuXHRyZWNpcGllbnROYW1lPyA6IHN0cmluZztcblx0cmVjaXBpZW50RW1haWw/IDogc3RyaW5nO1xuXHRyZWNpcGllbnRJZD8gOiBudW1iZXI7XG5cdGZyb21OYW1lPyA6IHN0cmluZztcblx0ZnJvbUVtYWlsPyA6IHN0cmluZztcblx0Ym9keVBhcmFtcz8gOiBzdHJpbmc7XG5cdHN1YmplY3RQYXJhbXM/IDogc3RyaW5nO1xuXHR0ZW1wbGF0ZVBhdGg/IDogc3RyaW5nO1xuXHRsYW5ndWFnZT8gOiBLYWx0dXJhTGFuZ3VhZ2VDb2RlO1xuXHRjYW1wYWlnbklkPyA6IG51bWJlcjtcblx0bWluU2VuZERhdGU/IDogbnVtYmVyO1xuXHRpc0h0bWw/IDogYm9vbGVhbjtcblx0c2VwYXJhdG9yPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYU1haWxKb2JEYXRhIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGEge1xuXG4gICAgbWFpbFR5cGUgOiBLYWx0dXJhTWFpbFR5cGU7XG5cdG1haWxQcmlvcml0eSA6IG51bWJlcjtcblx0c3RhdHVzIDogS2FsdHVyYU1haWxKb2JTdGF0dXM7XG5cdHJlY2lwaWVudE5hbWUgOiBzdHJpbmc7XG5cdHJlY2lwaWVudEVtYWlsIDogc3RyaW5nO1xuXHRyZWNpcGllbnRJZCA6IG51bWJlcjtcblx0ZnJvbU5hbWUgOiBzdHJpbmc7XG5cdGZyb21FbWFpbCA6IHN0cmluZztcblx0Ym9keVBhcmFtcyA6IHN0cmluZztcblx0c3ViamVjdFBhcmFtcyA6IHN0cmluZztcblx0dGVtcGxhdGVQYXRoIDogc3RyaW5nO1xuXHRsYW5ndWFnZSA6IEthbHR1cmFMYW5ndWFnZUNvZGU7XG5cdGNhbXBhaWduSWQgOiBudW1iZXI7XG5cdG1pblNlbmREYXRlIDogbnVtYmVyO1xuXHRpc0h0bWwgOiBib29sZWFuO1xuXHRzZXBhcmF0b3IgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFNYWlsSm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTWFpbEpvYkRhdGEnIH0sXG5cdFx0XHRcdG1haWxUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1haWxUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFNYWlsVHlwZScgfSxcblx0XHRcdFx0bWFpbFByaW9yaXR5IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFNYWlsSm9iU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFNYWlsSm9iU3RhdHVzJyB9LFxuXHRcdFx0XHRyZWNpcGllbnROYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlY2lwaWVudEVtYWlsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlY2lwaWVudElkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZyb21OYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZyb21FbWFpbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRib2R5UGFyYW1zIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN1YmplY3RQYXJhbXMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGVtcGxhdGVQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGxhbmd1YWdlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUxhbmd1YWdlQ29kZSwgc3ViVHlwZSA6ICdLYWx0dXJhTGFuZ3VhZ2VDb2RlJyB9LFxuXHRcdFx0XHRjYW1wYWlnbklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG1pblNlbmREYXRlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGlzSHRtbCA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRzZXBhcmF0b3IgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYU1haWxKb2JEYXRhJ10gPSBLYWx0dXJhTWFpbEpvYkRhdGE7Il19