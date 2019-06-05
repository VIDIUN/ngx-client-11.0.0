/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfileVodPackagerPlayServer } from './KalturaDeliveryProfileVodPackagerPlayServer';
/**
 * @record
 */
export function KalturaDeliveryProfileVodPackagerHlsArgs() { }
/** @type {?|undefined} */
KalturaDeliveryProfileVodPackagerHlsArgs.prototype.allowFairplayOffline;
var KalturaDeliveryProfileVodPackagerHls = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDeliveryProfileVodPackagerHls, _super);
    function KalturaDeliveryProfileVodPackagerHls(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDeliveryProfileVodPackagerHls.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDeliveryProfileVodPackagerHls' },
            allowFairplayOffline: { type: 'b' }
        });
        return result;
    };
    return KalturaDeliveryProfileVodPackagerHls;
}(KalturaDeliveryProfileVodPackagerPlayServer));
export { KalturaDeliveryProfileVodPackagerHls };
if (false) {
    /** @type {?} */
    KalturaDeliveryProfileVodPackagerHls.prototype.allowFairplayOffline;
}
typesMappingStorage['KalturaDeliveryProfileVodPackagerHls'] = KalturaDeliveryProfileVodPackagerHls;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZVZvZFBhY2thZ2VySGxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRGVsaXZlcnlQcm9maWxlVm9kUGFja2FnZXJIbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDJDQUEyQyxFQUFtRCxNQUFNLCtDQUErQyxDQUFDOzs7Ozs7O0FBTzdKLElBQUE7SUFBMEQsZ0VBQTJDO0lBSWpHLDhDQUFZLElBQWdEO2VBRXhELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsMkRBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsc0NBQXNDLEVBQUU7WUFDekYsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzVCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7K0NBN0JMO0VBUzBELDJDQUEyQyxFQXFCcEcsQ0FBQTtBQXJCRCxnREFxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsc0NBQXNDLENBQUMsR0FBRyxvQ0FBb0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGVsaXZlcnlQcm9maWxlVm9kUGFja2FnZXJQbGF5U2VydmVyLCBLYWx0dXJhRGVsaXZlcnlQcm9maWxlVm9kUGFja2FnZXJQbGF5U2VydmVyQXJncyB9IGZyb20gJy4vS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZVZvZFBhY2thZ2VyUGxheVNlcnZlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZVZvZFBhY2thZ2VySGxzQXJncyAgZXh0ZW5kcyBLYWx0dXJhRGVsaXZlcnlQcm9maWxlVm9kUGFja2FnZXJQbGF5U2VydmVyQXJncyB7XG4gICAgYWxsb3dGYWlycGxheU9mZmxpbmU/IDogYm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZVZvZFBhY2thZ2VySGxzIGV4dGVuZHMgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZVZvZFBhY2thZ2VyUGxheVNlcnZlciB7XG5cbiAgICBhbGxvd0ZhaXJwbGF5T2ZmbGluZSA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEZWxpdmVyeVByb2ZpbGVWb2RQYWNrYWdlckhsc0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRGVsaXZlcnlQcm9maWxlVm9kUGFja2FnZXJIbHMnIH0sXG5cdFx0XHRcdGFsbG93RmFpcnBsYXlPZmZsaW5lIDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEZWxpdmVyeVByb2ZpbGVWb2RQYWNrYWdlckhscyddID0gS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZVZvZFBhY2thZ2VySGxzOyJdfQ==