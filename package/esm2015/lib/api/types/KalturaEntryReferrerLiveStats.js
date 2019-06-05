/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryLiveStats } from './KalturaEntryLiveStats';
/**
 * @record
 */
export function KalturaEntryReferrerLiveStatsArgs() { }
/** @type {?|undefined} */
KalturaEntryReferrerLiveStatsArgs.prototype.referrer;
export class KalturaEntryReferrerLiveStats extends KalturaEntryLiveStats {
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
            objectType: { type: 'c', default: 'KalturaEntryReferrerLiveStats' },
            referrer: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaEntryReferrerLiveStats.prototype.referrer;
}
typesMappingStorage['KalturaEntryReferrerLiveStats'] = KalturaEntryReferrerLiveStats;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5UmVmZXJyZXJMaXZlU3RhdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFbnRyeVJlZmVycmVyTGl2ZVN0YXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUE2QixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7O0FBTzNGLE1BQU0sb0NBQXFDLFNBQVEscUJBQXFCOzs7O0lBSXBFLFlBQVksSUFBeUM7UUFFakQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ2xGLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7OztBQUVELG1CQUFtQixDQUFDLCtCQUErQixDQUFDLEdBQUcsNkJBQTZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5TGl2ZVN0YXRzLCBLYWx0dXJhRW50cnlMaXZlU3RhdHNBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlMaXZlU3RhdHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFbnRyeVJlZmVycmVyTGl2ZVN0YXRzQXJncyAgZXh0ZW5kcyBLYWx0dXJhRW50cnlMaXZlU3RhdHNBcmdzIHtcbiAgICByZWZlcnJlcj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFbnRyeVJlZmVycmVyTGl2ZVN0YXRzIGV4dGVuZHMgS2FsdHVyYUVudHJ5TGl2ZVN0YXRzIHtcblxuICAgIHJlZmVycmVyIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRW50cnlSZWZlcnJlckxpdmVTdGF0c0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRW50cnlSZWZlcnJlckxpdmVTdGF0cycgfSxcblx0XHRcdFx0cmVmZXJyZXIgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVudHJ5UmVmZXJyZXJMaXZlU3RhdHMnXSA9IEthbHR1cmFFbnRyeVJlZmVycmVyTGl2ZVN0YXRzOyJdfQ==