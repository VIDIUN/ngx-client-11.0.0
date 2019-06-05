/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryContextDataParams } from './KalturaEntryContextDataParams';
/**
 * @record
 */
export function KalturaPlaybackContextOptionsArgs() { }
var KalturaPlaybackContextOptions = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPlaybackContextOptions, _super);
    function KalturaPlaybackContextOptions(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaPlaybackContextOptions.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPlaybackContextOptions' }
        });
        return result;
    };
    return KalturaPlaybackContextOptions;
}(KalturaEntryContextDataParams));
export { KalturaPlaybackContextOptions };
typesMappingStorage['KalturaPlaybackContextOptions'] = KalturaPlaybackContextOptions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXliYWNrQ29udGV4dE9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFQbGF5YmFja0NvbnRleHRPcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw2QkFBNkIsRUFBcUMsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7QUFPbkgsSUFBQTtJQUFtRCx5REFBNkI7SUFJNUUsdUNBQVksSUFBeUM7ZUFFakQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxvREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtTQUN6RSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dDQTVCTDtFQVNtRCw2QkFBNkIsRUFvQi9FLENBQUE7QUFwQkQseUNBb0JDO0FBRUQsbUJBQW1CLENBQUMsK0JBQStCLENBQUMsR0FBRyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRW50cnlDb250ZXh0RGF0YVBhcmFtcywgS2FsdHVyYUVudHJ5Q29udGV4dERhdGFQYXJhbXNBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlDb250ZXh0RGF0YVBhcmFtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVBsYXliYWNrQ29udGV4dE9wdGlvbnNBcmdzICBleHRlbmRzIEthbHR1cmFFbnRyeUNvbnRleHREYXRhUGFyYW1zQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFQbGF5YmFja0NvbnRleHRPcHRpb25zIGV4dGVuZHMgS2FsdHVyYUVudHJ5Q29udGV4dERhdGFQYXJhbXMge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFQbGF5YmFja0NvbnRleHRPcHRpb25zQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFQbGF5YmFja0NvbnRleHRPcHRpb25zJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUGxheWJhY2tDb250ZXh0T3B0aW9ucyddID0gS2FsdHVyYVBsYXliYWNrQ29udGV4dE9wdGlvbnM7Il19