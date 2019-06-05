/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProtocol } from './KalturaDistributionProtocol';
import { KalturaConfigurableDistributionProfile } from './KalturaConfigurableDistributionProfile';
/**
 * @record
 */
export function KalturaPushToNewsDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaPushToNewsDistributionProfileArgs.prototype.protocol;
/** @type {?|undefined} */
KalturaPushToNewsDistributionProfileArgs.prototype.host;
/** @type {?|undefined} */
KalturaPushToNewsDistributionProfileArgs.prototype.ips;
/** @type {?|undefined} */
KalturaPushToNewsDistributionProfileArgs.prototype.port;
/** @type {?|undefined} */
KalturaPushToNewsDistributionProfileArgs.prototype.basePath;
/** @type {?|undefined} */
KalturaPushToNewsDistributionProfileArgs.prototype.username;
/** @type {?|undefined} */
KalturaPushToNewsDistributionProfileArgs.prototype.password;
/** @type {?|undefined} */
KalturaPushToNewsDistributionProfileArgs.prototype.certificateKey;
/** @type {?|undefined} */
KalturaPushToNewsDistributionProfileArgs.prototype.bodyXslt;
/** @type {?|undefined} */
KalturaPushToNewsDistributionProfileArgs.prototype.recentNewsTimeInterval;
var KalturaPushToNewsDistributionProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPushToNewsDistributionProfile, _super);
    function KalturaPushToNewsDistributionProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaPushToNewsDistributionProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPushToNewsDistributionProfile' },
            protocol: { type: 'en', subTypeConstructor: KalturaDistributionProtocol, subType: 'KalturaDistributionProtocol' },
            host: { type: 's' },
            ips: { type: 's' },
            port: { type: 'n' },
            basePath: { type: 's' },
            username: { type: 's' },
            password: { type: 's' },
            certificateKey: { type: 's' },
            bodyXslt: { type: 's' },
            recentNewsTimeInterval: { type: 'n' }
        });
        return result;
    };
    return KalturaPushToNewsDistributionProfile;
}(KalturaConfigurableDistributionProfile));
export { KalturaPushToNewsDistributionProfile };
if (false) {
    /** @type {?} */
    KalturaPushToNewsDistributionProfile.prototype.protocol;
    /** @type {?} */
    KalturaPushToNewsDistributionProfile.prototype.host;
    /** @type {?} */
    KalturaPushToNewsDistributionProfile.prototype.ips;
    /** @type {?} */
    KalturaPushToNewsDistributionProfile.prototype.port;
    /** @type {?} */
    KalturaPushToNewsDistributionProfile.prototype.basePath;
    /** @type {?} */
    KalturaPushToNewsDistributionProfile.prototype.username;
    /** @type {?} */
    KalturaPushToNewsDistributionProfile.prototype.password;
    /** @type {?} */
    KalturaPushToNewsDistributionProfile.prototype.certificateKey;
    /** @type {?} */
    KalturaPushToNewsDistributionProfile.prototype.bodyXslt;
    /** @type {?} */
    KalturaPushToNewsDistributionProfile.prototype.recentNewsTimeInterval;
}
typesMappingStorage['KalturaPushToNewsDistributionProfile'] = KalturaPushToNewsDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVB1c2hUb05ld3NEaXN0cmlidXRpb25Qcm9maWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUHVzaFRvTmV3c0Rpc3RyaWJ1dGlvblByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLHNDQUFzQyxFQUE4QyxNQUFNLDBDQUEwQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0I5SSxJQUFBO0lBQTBELGdFQUFzQztJQWE1Riw4Q0FBWSxJQUFnRDtlQUV4RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDJEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNDQUFzQyxFQUFFO1lBQ3pGLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ3JILElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsR0FBRyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDOUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsrQ0F6REw7RUFtQjBELHNDQUFzQyxFQXVDL0YsQ0FBQTtBQXZDRCxnREF1Q0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsc0NBQXNDLENBQUMsR0FBRyxvQ0FBb0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdG9jb2wgfSBmcm9tICcuL0thbHR1cmFEaXN0cmlidXRpb25Qcm90b2NvbCc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSwgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVB1c2hUb05ld3NEaXN0cmlidXRpb25Qcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3Mge1xuICAgIHByb3RvY29sPyA6IEthbHR1cmFEaXN0cmlidXRpb25Qcm90b2NvbDtcblx0aG9zdD8gOiBzdHJpbmc7XG5cdGlwcz8gOiBzdHJpbmc7XG5cdHBvcnQ/IDogbnVtYmVyO1xuXHRiYXNlUGF0aD8gOiBzdHJpbmc7XG5cdHVzZXJuYW1lPyA6IHN0cmluZztcblx0cGFzc3dvcmQ/IDogc3RyaW5nO1xuXHRjZXJ0aWZpY2F0ZUtleT8gOiBzdHJpbmc7XG5cdGJvZHlYc2x0PyA6IHN0cmluZztcblx0cmVjZW50TmV3c1RpbWVJbnRlcnZhbD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFQdXNoVG9OZXdzRGlzdHJpYnV0aW9uUHJvZmlsZSBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlIHtcblxuICAgIHByb3RvY29sIDogS2FsdHVyYURpc3RyaWJ1dGlvblByb3RvY29sO1xuXHRob3N0IDogc3RyaW5nO1xuXHRpcHMgOiBzdHJpbmc7XG5cdHBvcnQgOiBudW1iZXI7XG5cdGJhc2VQYXRoIDogc3RyaW5nO1xuXHR1c2VybmFtZSA6IHN0cmluZztcblx0cGFzc3dvcmQgOiBzdHJpbmc7XG5cdGNlcnRpZmljYXRlS2V5IDogc3RyaW5nO1xuXHRib2R5WHNsdCA6IHN0cmluZztcblx0cmVjZW50TmV3c1RpbWVJbnRlcnZhbCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVB1c2hUb05ld3NEaXN0cmlidXRpb25Qcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFQdXNoVG9OZXdzRGlzdHJpYnV0aW9uUHJvZmlsZScgfSxcblx0XHRcdFx0cHJvdG9jb2wgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdG9jb2wsIHN1YlR5cGUgOiAnS2FsdHVyYURpc3RyaWJ1dGlvblByb3RvY29sJyB9LFxuXHRcdFx0XHRob3N0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGlwcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwb3J0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGJhc2VQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVzZXJuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhc3N3b3JkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNlcnRpZmljYXRlS2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGJvZHlYc2x0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlY2VudE5ld3NUaW1lSW50ZXJ2YWwgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVB1c2hUb05ld3NEaXN0cmlidXRpb25Qcm9maWxlJ10gPSBLYWx0dXJhUHVzaFRvTmV3c0Rpc3RyaWJ1dGlvblByb2ZpbGU7Il19