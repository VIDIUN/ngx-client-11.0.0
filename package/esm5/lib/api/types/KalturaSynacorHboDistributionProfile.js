/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile } from './KalturaConfigurableDistributionProfile';
/**
 * @record
 */
export function KalturaSynacorHboDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaSynacorHboDistributionProfileArgs.prototype.feedTitle;
/** @type {?|undefined} */
KalturaSynacorHboDistributionProfileArgs.prototype.feedSubtitle;
/** @type {?|undefined} */
KalturaSynacorHboDistributionProfileArgs.prototype.feedLink;
/** @type {?|undefined} */
KalturaSynacorHboDistributionProfileArgs.prototype.feedAuthorName;
var KalturaSynacorHboDistributionProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaSynacorHboDistributionProfile, _super);
    function KalturaSynacorHboDistributionProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaSynacorHboDistributionProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaSynacorHboDistributionProfile' },
            feedUrl: { type: 's', readOnly: true },
            feedTitle: { type: 's' },
            feedSubtitle: { type: 's' },
            feedLink: { type: 's' },
            feedAuthorName: { type: 's' }
        });
        return result;
    };
    return KalturaSynacorHboDistributionProfile;
}(KalturaConfigurableDistributionProfile));
export { KalturaSynacorHboDistributionProfile };
if (false) {
    /** @type {?} */
    KalturaSynacorHboDistributionProfile.prototype.feedUrl;
    /** @type {?} */
    KalturaSynacorHboDistributionProfile.prototype.feedTitle;
    /** @type {?} */
    KalturaSynacorHboDistributionProfile.prototype.feedSubtitle;
    /** @type {?} */
    KalturaSynacorHboDistributionProfile.prototype.feedLink;
    /** @type {?} */
    KalturaSynacorHboDistributionProfile.prototype.feedAuthorName;
}
typesMappingStorage['KalturaSynacorHboDistributionProfile'] = KalturaSynacorHboDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVN5bmFjb3JIYm9EaXN0cmlidXRpb25Qcm9maWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU3luYWNvckhib0Rpc3RyaWJ1dGlvblByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNDQUFzQyxFQUE4QyxNQUFNLDBDQUEwQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FBVTlJLElBQUE7SUFBMEQsZ0VBQXNDO0lBUTVGLDhDQUFZLElBQWdEO2VBRXhELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsMkRBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsc0NBQXNDLEVBQUU7WUFDekYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3pDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsrQ0F4Q0w7RUFZMEQsc0NBQXNDLEVBNkIvRixDQUFBO0FBN0JELGdEQTZCQzs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHNDQUFzQyxDQUFDLEdBQUcsb0NBQW9DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUsIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTeW5hY29ySGJvRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIHtcbiAgICBmZWVkVGl0bGU/IDogc3RyaW5nO1xuXHRmZWVkU3VidGl0bGU/IDogc3RyaW5nO1xuXHRmZWVkTGluaz8gOiBzdHJpbmc7XG5cdGZlZWRBdXRob3JOYW1lPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVN5bmFjb3JIYm9EaXN0cmlidXRpb25Qcm9maWxlIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUge1xuXG4gICAgcmVhZG9ubHkgZmVlZFVybCA6IHN0cmluZztcblx0ZmVlZFRpdGxlIDogc3RyaW5nO1xuXHRmZWVkU3VidGl0bGUgOiBzdHJpbmc7XG5cdGZlZWRMaW5rIDogc3RyaW5nO1xuXHRmZWVkQXV0aG9yTmFtZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVN5bmFjb3JIYm9EaXN0cmlidXRpb25Qcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTeW5hY29ySGJvRGlzdHJpYnV0aW9uUHJvZmlsZScgfSxcblx0XHRcdFx0ZmVlZFVybCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGZlZWRUaXRsZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmZWVkU3VidGl0bGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmVlZExpbmsgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmVlZEF1dGhvck5hbWUgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVN5bmFjb3JIYm9EaXN0cmlidXRpb25Qcm9maWxlJ10gPSBLYWx0dXJhU3luYWNvckhib0Rpc3RyaWJ1dGlvblByb2ZpbGU7Il19