/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaFtpDistributionFileArgs() { }
/** @type {?|undefined} */
KalturaFtpDistributionFileArgs.prototype.assetId;
/** @type {?|undefined} */
KalturaFtpDistributionFileArgs.prototype.filename;
/** @type {?|undefined} */
KalturaFtpDistributionFileArgs.prototype.contents;
/** @type {?|undefined} */
KalturaFtpDistributionFileArgs.prototype.localFilePath;
/** @type {?|undefined} */
KalturaFtpDistributionFileArgs.prototype.version;
/** @type {?|undefined} */
KalturaFtpDistributionFileArgs.prototype.hash;
export class KalturaFtpDistributionFile extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaFtpDistributionFile' },
            assetId: { type: 's' },
            filename: { type: 's' },
            contents: { type: 's' },
            localFilePath: { type: 's' },
            version: { type: 's' },
            hash: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaFtpDistributionFile.prototype.assetId;
    /** @type {?} */
    KalturaFtpDistributionFile.prototype.filename;
    /** @type {?} */
    KalturaFtpDistributionFile.prototype.contents;
    /** @type {?} */
    KalturaFtpDistributionFile.prototype.localFilePath;
    /** @type {?} */
    KalturaFtpDistributionFile.prototype.version;
    /** @type {?} */
    KalturaFtpDistributionFile.prototype.hash;
}
typesMappingStorage['KalturaFtpDistributionFile'] = KalturaFtpDistributionFile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZ0cERpc3RyaWJ1dGlvbkZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFGdHBEaXN0cmlidXRpb25GaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQVlsRixNQUFNLGlDQUFrQyxTQUFRLGlCQUFpQjs7OztJQVM3RCxZQUFZLElBQXNDO1FBRTlDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUMvRSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNaLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNEJBQTRCLENBQUMsR0FBRywwQkFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUZ0cERpc3RyaWJ1dGlvbkZpbGVBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgYXNzZXRJZD8gOiBzdHJpbmc7XG5cdGZpbGVuYW1lPyA6IHN0cmluZztcblx0Y29udGVudHM/IDogc3RyaW5nO1xuXHRsb2NhbEZpbGVQYXRoPyA6IHN0cmluZztcblx0dmVyc2lvbj8gOiBzdHJpbmc7XG5cdGhhc2g/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRnRwRGlzdHJpYnV0aW9uRmlsZSBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGFzc2V0SWQgOiBzdHJpbmc7XG5cdGZpbGVuYW1lIDogc3RyaW5nO1xuXHRjb250ZW50cyA6IHN0cmluZztcblx0bG9jYWxGaWxlUGF0aCA6IHN0cmluZztcblx0dmVyc2lvbiA6IHN0cmluZztcblx0aGFzaCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUZ0cERpc3RyaWJ1dGlvbkZpbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUZ0cERpc3RyaWJ1dGlvbkZpbGUnIH0sXG5cdFx0XHRcdGFzc2V0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmlsZW5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29udGVudHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bG9jYWxGaWxlUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR2ZXJzaW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGhhc2ggOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUZ0cERpc3RyaWJ1dGlvbkZpbGUnXSA9IEthbHR1cmFGdHBEaXN0cmlidXRpb25GaWxlOyJdfQ==