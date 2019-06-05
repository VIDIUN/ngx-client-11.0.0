/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEmailNotificationRecipient } from './KalturaEmailNotificationRecipient';
import { KalturaEmailNotificationRecipientProvider } from './KalturaEmailNotificationRecipientProvider';
/**
 * @record
 */
export function KalturaEmailNotificationStaticRecipientProviderArgs() { }
/** @type {?|undefined} */
KalturaEmailNotificationStaticRecipientProviderArgs.prototype.emailRecipients;
var KalturaEmailNotificationStaticRecipientProvider = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEmailNotificationStaticRecipientProvider, _super);
    function KalturaEmailNotificationStaticRecipientProvider(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.emailRecipients === 'undefined')
            _this.emailRecipients = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaEmailNotificationStaticRecipientProvider.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEmailNotificationStaticRecipientProvider' },
            emailRecipients: { type: 'a', subTypeConstructor: KalturaEmailNotificationRecipient, subType: 'KalturaEmailNotificationRecipient' }
        });
        return result;
    };
    return KalturaEmailNotificationStaticRecipientProvider;
}(KalturaEmailNotificationRecipientProvider));
export { KalturaEmailNotificationStaticRecipientProvider };
if (false) {
    /** @type {?} */
    KalturaEmailNotificationStaticRecipientProvider.prototype.emailRecipients;
}
typesMappingStorage['KalturaEmailNotificationStaticRecipientProvider'] = KalturaEmailNotificationStaticRecipientProvider;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uU3RhdGljUmVjaXBpZW50UHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvblN0YXRpY1JlY2lwaWVudFByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx5Q0FBeUMsRUFBaUQsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7OztBQU92SixJQUFBO0lBQXFFLDJFQUF5QztJQUkxRyx5REFBWSxJQUEyRDtRQUF2RSxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsZUFBZSxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDOztLQUM5RTs7OztJQUVTLHNFQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlEQUFpRCxFQUFFO1lBQ3BHLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsaUNBQWlDLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1NBQzlILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MERBL0JMO0VBVXFFLHlDQUF5QyxFQXNCN0csQ0FBQTtBQXRCRCwyREFzQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsaURBQWlELENBQUMsR0FBRywrQ0FBK0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnQgfSBmcm9tICcuL0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudCc7XG5pbXBvcnQgeyBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRQcm92aWRlciwgS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50UHJvdmlkZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRQcm92aWRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uU3RhdGljUmVjaXBpZW50UHJvdmlkZXJBcmdzICBleHRlbmRzIEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudFByb3ZpZGVyQXJncyB7XG4gICAgZW1haWxSZWNpcGllbnRzPyA6IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudFtdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25TdGF0aWNSZWNpcGllbnRQcm92aWRlciBleHRlbmRzIEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudFByb3ZpZGVyIHtcblxuICAgIGVtYWlsUmVjaXBpZW50cyA6IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudFtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25TdGF0aWNSZWNpcGllbnRQcm92aWRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmVtYWlsUmVjaXBpZW50cyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuZW1haWxSZWNpcGllbnRzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uU3RhdGljUmVjaXBpZW50UHJvdmlkZXInIH0sXG5cdFx0XHRcdGVtYWlsUmVjaXBpZW50cyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50LCBzdWJUeXBlIDogJ0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uU3RhdGljUmVjaXBpZW50UHJvdmlkZXInXSA9IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblN0YXRpY1JlY2lwaWVudFByb3ZpZGVyOyJdfQ==