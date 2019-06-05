/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaActivitiBusinessProcessServer extends KalturaBusinessProcessServer {
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
            objectType: { type: 'c', default: 'KalturaActivitiBusinessProcessServer' },
            host: { type: 's' },
            port: { type: 'n' },
            protocol: { type: 'es', subTypeConstructor: KalturaActivitiBusinessProcessServerProtocol, subType: 'KalturaActivitiBusinessProcessServerProtocol' },
            username: { type: 's' },
            password: { type: 's' }
        });
        return result;
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFjdGl2aXRpQnVzaW5lc3NQcm9jZXNzU2VydmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQWN0aXZpdGlCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsNENBQTRDLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM5RyxPQUFPLEVBQUUsNEJBQTRCLEVBQW9DLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQVdoSCxNQUFNLDJDQUE0QyxTQUFRLDRCQUE0Qjs7OztJQVFsRixZQUFZLElBQWdEO1FBRXhELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQ0FBc0MsRUFBRTtZQUN6RixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw0Q0FBNEMsRUFBRSxPQUFPLEVBQUcsOENBQThDLEVBQUU7WUFDdkosUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHNDQUFzQyxDQUFDLEdBQUcsb0NBQW9DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUFjdGl2aXRpQnVzaW5lc3NQcm9jZXNzU2VydmVyUHJvdG9jb2wgfSBmcm9tICcuL0thbHR1cmFBY3Rpdml0aUJ1c2luZXNzUHJvY2Vzc1NlcnZlclByb3RvY29sJztcbmltcG9ydCB7IEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXIsIEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQWN0aXZpdGlCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJBcmdzICBleHRlbmRzIEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJBcmdzIHtcbiAgICBob3N0PyA6IHN0cmluZztcblx0cG9ydD8gOiBudW1iZXI7XG5cdHByb3RvY29sPyA6IEthbHR1cmFBY3Rpdml0aUJ1c2luZXNzUHJvY2Vzc1NlcnZlclByb3RvY29sO1xuXHR1c2VybmFtZT8gOiBzdHJpbmc7XG5cdHBhc3N3b3JkPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUFjdGl2aXRpQnVzaW5lc3NQcm9jZXNzU2VydmVyIGV4dGVuZHMgS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlciB7XG5cbiAgICBob3N0IDogc3RyaW5nO1xuXHRwb3J0IDogbnVtYmVyO1xuXHRwcm90b2NvbCA6IEthbHR1cmFBY3Rpdml0aUJ1c2luZXNzUHJvY2Vzc1NlcnZlclByb3RvY29sO1xuXHR1c2VybmFtZSA6IHN0cmluZztcblx0cGFzc3dvcmQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBY3Rpdml0aUJ1c2luZXNzUHJvY2Vzc1NlcnZlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQWN0aXZpdGlCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXInIH0sXG5cdFx0XHRcdGhvc3QgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cG9ydCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwcm90b2NvbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBY3Rpdml0aUJ1c2luZXNzUHJvY2Vzc1NlcnZlclByb3RvY29sLCBzdWJUeXBlIDogJ0thbHR1cmFBY3Rpdml0aUJ1c2luZXNzUHJvY2Vzc1NlcnZlclByb3RvY29sJyB9LFxuXHRcdFx0XHR1c2VybmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQWN0aXZpdGlCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXInXSA9IEthbHR1cmFBY3Rpdml0aUJ1c2luZXNzUHJvY2Vzc1NlcnZlcjsiXX0=