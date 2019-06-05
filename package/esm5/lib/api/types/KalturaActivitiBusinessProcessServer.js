/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaActivitiBusinessProcessServerProtocol } from './KalturaActivitiBusinessProcessServerProtocol';
import { KalturaBusinessProcessServer } from './KalturaBusinessProcessServer';
/**
 * @record
 */
export function KalturaActivitiBusinessProcessServerArgs() { }
/** @type {?|undefined} */
KalturaActivitiBusinessProcessServerArgs.prototype.host;
/** @type {?|undefined} */
KalturaActivitiBusinessProcessServerArgs.prototype.port;
/** @type {?|undefined} */
KalturaActivitiBusinessProcessServerArgs.prototype.protocol;
/** @type {?|undefined} */
KalturaActivitiBusinessProcessServerArgs.prototype.username;
/** @type {?|undefined} */
KalturaActivitiBusinessProcessServerArgs.prototype.password;
var KalturaActivitiBusinessProcessServer = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaActivitiBusinessProcessServer, _super);
    function KalturaActivitiBusinessProcessServer(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaActivitiBusinessProcessServer.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaActivitiBusinessProcessServer' },
            host: { type: 's' },
            port: { type: 'n' },
            protocol: { type: 'es', subTypeConstructor: KalturaActivitiBusinessProcessServerProtocol, subType: 'KalturaActivitiBusinessProcessServerProtocol' },
            username: { type: 's' },
            password: { type: 's' }
        });
        return result;
    };
    return KalturaActivitiBusinessProcessServer;
}(KalturaBusinessProcessServer));
export { KalturaActivitiBusinessProcessServer };
if (false) {
    /** @type {?} */
    KalturaActivitiBusinessProcessServer.prototype.host;
    /** @type {?} */
    KalturaActivitiBusinessProcessServer.prototype.port;
    /** @type {?} */
    KalturaActivitiBusinessProcessServer.prototype.protocol;
    /** @type {?} */
    KalturaActivitiBusinessProcessServer.prototype.username;
    /** @type {?} */
    KalturaActivitiBusinessProcessServer.prototype.password;
}
typesMappingStorage['KalturaActivitiBusinessProcessServer'] = KalturaActivitiBusinessProcessServer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFjdGl2aXRpQnVzaW5lc3NQcm9jZXNzU2VydmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQWN0aXZpdGlCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDRDQUE0QyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDOUcsT0FBTyxFQUFFLDRCQUE0QixFQUFvQyxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFXaEgsSUFBQTtJQUEwRCxnRUFBNEI7SUFRbEYsOENBQVksSUFBZ0Q7ZUFFeEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywyREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQ0FBc0MsRUFBRTtZQUN6RixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw0Q0FBNEMsRUFBRSxPQUFPLEVBQUcsOENBQThDLEVBQUU7WUFDdkosUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7K0NBMUNMO0VBYzBELDRCQUE0QixFQTZCckYsQ0FBQTtBQTdCRCxnREE2QkM7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxzQ0FBc0MsQ0FBQyxHQUFHLG9DQUFvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFBY3Rpdml0aUJ1c2luZXNzUHJvY2Vzc1NlcnZlclByb3RvY29sIH0gZnJvbSAnLi9LYWx0dXJhQWN0aXZpdGlCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJQcm90b2NvbCc7XG5pbXBvcnQgeyBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyLCBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUFjdGl2aXRpQnVzaW5lc3NQcm9jZXNzU2VydmVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyQXJncyB7XG4gICAgaG9zdD8gOiBzdHJpbmc7XG5cdHBvcnQ/IDogbnVtYmVyO1xuXHRwcm90b2NvbD8gOiBLYWx0dXJhQWN0aXZpdGlCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJQcm90b2NvbDtcblx0dXNlcm5hbWU/IDogc3RyaW5nO1xuXHRwYXNzd29yZD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBY3Rpdml0aUJ1c2luZXNzUHJvY2Vzc1NlcnZlciBleHRlbmRzIEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXIge1xuXG4gICAgaG9zdCA6IHN0cmluZztcblx0cG9ydCA6IG51bWJlcjtcblx0cHJvdG9jb2wgOiBLYWx0dXJhQWN0aXZpdGlCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJQcm90b2NvbDtcblx0dXNlcm5hbWUgOiBzdHJpbmc7XG5cdHBhc3N3b3JkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQWN0aXZpdGlCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUFjdGl2aXRpQnVzaW5lc3NQcm9jZXNzU2VydmVyJyB9LFxuXHRcdFx0XHRob3N0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBvcnQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cHJvdG9jb2wgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQWN0aXZpdGlCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJQcm90b2NvbCwgc3ViVHlwZSA6ICdLYWx0dXJhQWN0aXZpdGlCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJQcm90b2NvbCcgfSxcblx0XHRcdFx0dXNlcm5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFzc3dvcmQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUFjdGl2aXRpQnVzaW5lc3NQcm9jZXNzU2VydmVyJ10gPSBLYWx0dXJhQWN0aXZpdGlCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXI7Il19